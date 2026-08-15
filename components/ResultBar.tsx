import { Candidate } from "@/types";

interface ResultBarProps {
  candidate: Candidate;
  totalVotes: number;
  rank: number;
}

const rankTitles = ["Head of House", "Assistant Head of House", "Runner-up"];

export default function ResultBar({
  candidate,
  totalVotes,
  rank,
}: ResultBarProps) {
  const percentage =
    totalVotes === 0 ? 0 : Math.round((candidate.votes / totalVotes) * 100);

  const hasVotes = candidate.votes > 0;
  const isTopTwo = rank < 2 && hasVotes;

  const title = !hasVotes
    ? "No votes yet"
    : rank < rankTitles.length
      ? rankTitles[rank]
      : rankTitles[2];

  return (
    <div
      className={`mb-5 p-4 rounded-xl font-['Inter'] ${isTopTwo ? "bg-[#FFF9EE] border border-[#F5A623]" : "bg-gray-50"}`}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-extrabold text-[#1B2A4B]">{candidate.name}</span>
        <span className="text-gray-500 text-sm">
          {candidate.votes} votes ({percentage}%)
        </span>
      </div>
      <p
        className={`text-sm font-bold mb-2 ${isTopTwo ? "text-[#F5A623]" : "text-gray-400"}`}
      >
        {isTopTwo ? `\u2605 ${title}` : title}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${isTopTwo ? "bg-[#F5A623]" : "bg-[#1B2A4B]"}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
