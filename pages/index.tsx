import { useVote } from "@/context/VoteContext";
import CandidateCard from "@/components/CandidateCard";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const { candidates, hasVoted, votedFor, castVote } = useVote();

  return (
    <>
      <Head>
        <title>Vote | Head of House</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-2">Cast Your Vote</h1>
        <p className="text-center text-gray-500 mb-10">
          {hasVoted
            ? "Thanks for voting! You can view live results below."
            : "Choose one candidate below."}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onVote={castVote}
              hasVoted={hasVoted}
              isSelected={votedFor === candidate.id}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/results"
            className="text-blue-600 font-medium hover:underline"
          >
            View Results →
          </Link>
        </div>
      </main>
    </>
  );
}
