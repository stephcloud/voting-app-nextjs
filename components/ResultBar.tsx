import { Candidate } from "@/types";

interface ResultBarProps {
  candidate: Candidate;
  totalVotes: number;
}

export default function ResultBar({ candidate, totalVotes }: ResultBarProps) {
  const percentage =
    totalVotes === 0 ? 0 : Math.round((candidate.votes / totalVotes) * 100);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{candidate.name}</span>
        <span className="text-gray-500">
          {candidate.votes} votes ({percentage}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
