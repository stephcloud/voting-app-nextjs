import { useState } from "react";
import { Candidate } from "@/types";

interface CandidateSearchProps {
  candidates: Candidate[];
  onSelect: (id: string) => void;
}

export default function CandidateSearch({
  candidates,
  onSelect,
}: CandidateSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const suggestions =
    searchTerm.trim() === ""
      ? []
      : candidates.filter((c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  function handleSelect(id: string) {
    onSelect(id);
    setSearchTerm(""); // clear the search after picking someone
  }

  return (
    <div className="relative font-['Inter']">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name..."
        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623] text-[#1B2A4B]"
      />

      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-100 rounded-xl shadow-lg mt-2 max-h-60 overflow-y-auto">
          {suggestions.map((candidate) => (
            <button
              key={candidate.id}
              onClick={() => handleSelect(candidate.id)}
              className="w-full text-left px-4 py-3 hover:bg-[#FFF9EE] transition-colors border-b border-gray-50 last:border-b-0"
            >
              <p className="font-semibold text-[#1B2A4B]">{candidate.name}</p>
              {candidate.description && (
                <p className="text-gray-400 text-sm">{candidate.description}</p>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
