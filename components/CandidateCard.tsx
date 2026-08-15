import { Candidate } from "@/types";
import { FaCheckCircle } from "react-icons/fa";

interface CandidateCardProps {
  candidate: Candidate;
  onVote: (id: string) => void;
  hasVoted: boolean;
  isSelected: boolean;
}

export default function CandidateCard({
  candidate,
  onVote,
  hasVoted,
  isSelected,
}: CandidateCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border-2 transition-colors ${isSelected ? "border-green-500 bg-green-50" : "border-gray-200"}`}
    >
      <h3 className="text-lg font-semibold">{candidate.name}</h3>
      {candidate.description && (
        <p className="text-gray-500 text-sm mt-1">{candidate.description}</p>
      )}

      <button
        onClick={() => onVote(candidate.id)}
        disabled={hasVoted}
        className={`mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors
          ${
            hasVoted
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
      >
        {isSelected && <FaCheckCircle />}
        {isSelected ? "Your Vote" : hasVoted ? "Voting Closed" : "Vote"}
      </button>
    </div>
  );
}
