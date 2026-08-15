import { useVote } from "@/context/VoteContext";
import ResultBar from "@/components/ResultBar";
import Link from "next/link";
import Head from "next/head";

export default function Results() {
  const { candidates } = useVote();
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  // sorted candidates from highest to lowest
  const rankedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);

  return (
    <>
      <Head>
        <title>Results | Head of House</title>
      </Head>
      <main className="min-h-screen bg-[#FAFAF8] px-4 py-16 font-['Inter']">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-[#F5A623] text-sm font-bold tracking-wide uppercase mb-2">
            Live Results
          </p>
          <h1 className="text-4xl font-extrabold text-center text-[#1B2A4B] mb-2">
            Head of House
          </h1>
          <p className="text-center text-gray-500 mb-10">
            {totalVotes} total votes cast
          </p>

          <div className="max-h-[32rem] overflow-y-auto pr-1">
            {rankedCandidates.map((candidate, index) => (
              <ResultBar
                key={candidate.id}
                candidate={candidate}
                totalVotes={totalVotes}
                rank={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="inline-block border-2 border-[#1B2A4B] text-[#1B2A4B] font-bold px-6 py-3 rounded-full hover:bg-[#1B2A4B] hover:text-white transition-colors"
            >
              Back to Voting
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
