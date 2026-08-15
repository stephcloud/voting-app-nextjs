import { Candidate } from "@/types";

interface CandidateRowProps {
  candidate: Candidate;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export default function CandidateRow({
  candidate,
  onSelect,
  isSelected,
}: CandidateRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-b-0 font-['Inter']
        ${isSelected ? "bg-[#FFF9EE]" : "hover:bg-gray-50"}`}
    >
      <div>
        <p className="font-semibold text-[#1B2A4B]">{candidate.name}</p>
        {candidate.description && (
          <p className="text-gray-400 text-sm">{candidate.description}</p>
        )}
      </div>
      <button
        onClick={() => onSelect(candidate.id)}
        className="text-sm font-bold text-[#1B2A4B] hover:text-[#F5A623] transition-colors"
      >
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
}
