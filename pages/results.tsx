import { useVote } from "@/context/VoteContext";
import ResultBar from "@/components/ResultBar";
import Link from "next/link";

export default function Results() {
  const { candidates, resetVotes } = useVote();
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Live Results</h1>
      <p className="text-center text-gray-500 mb-10">
        {totalVotes} total votes cast
      </p>

      {candidates.map((candidate) => (
        <ResultBar
          key={candidate.id}
          candidate={candidate}
          totalVotes={totalVotes}
        />
      ))}

      <div className="flex justify-between items-center mt-10">
        <Link href="/" className="text-blue-600 font-medium hover:underline">
          ← Back to Voting
        </Link>
        <button
          onClick={resetVotes}
          className="text-sm text-red-500 hover:underline"
        >
          Reset Votes (testing only)
        </button>
      </div>
    </main>
  );
}
