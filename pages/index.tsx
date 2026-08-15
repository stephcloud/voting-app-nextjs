import { useState } from "react";
import { useVote } from "@/context/VoteContext";
import CandidateSearch from "@/components/CandidateSearch";
import CandidateRow from "@/components/CandidateRow";
import SelectedCandidateCard from "@/components/SelectedCandidateCard";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const { candidates, hasVoted, castVote } = useVote();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);

  const selectedCandidate = candidates.find((c) => c.id === selectedId) || null;

  function handleConfirm() {
    if (selectedId) {
      castVote(selectedId);
      setSelectedId(null);
    }
  }

  // Leader calculation
  const sorted = [...candidates].sort((a, b) => b.votes - a.votes);
  const leader = sorted[0];
  const isTie =
    sorted[1] && sorted[1].votes === leader.votes && leader.votes > 0;

  return (
    <>
      <Head>
        <title>Vote | Head of House</title>
      </Head>
      <main className="min-h-screen bg-[#FAFAF8] px-4 py-16 font-['Inter']">
        <div className="max-w-xl mx-auto">
          <p className="text-center text-[#F5A623] text-sm font-bold tracking-wide uppercase mb-2">
            Official Ballot
          </p>
          <h1 className="text-4xl font-extrabold text-center text-[#1B2A4B] mb-10">
            Cast Your Vote
          </h1>

          {hasVoted ? (
            // after voting section
            <div className="text-center">
              <p className="text-gray-500 mb-6">Thanks for voting!</p>
              <div className="max-w-sm mx-auto mb-10 p-4 rounded-xl bg-[#FFF9EE] border border-[#F5A623]">
                <p className="text-xs font-bold text-[#F5A623] uppercase tracking-wide mb-1">
                  Currently Leading
                </p>
                {isTie ? (
                  <p className="font-extrabold text-[#1B2A4B]">
                    It's a tie so far
                  </p>
                ) : (
                  <p className="font-extrabold text-[#1B2A4B]">
                    {leader.name} — {leader.votes} vote
                    {leader.votes !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
              <Link
                href="/results"
                className="inline-block bg-[#1B2A4B] text-white font-bold px-6 py-3 rounded-full hover:bg-[#2A3D6B] transition-colors"
              >
                View Results
              </Link>
            </div>
          ) : selectedCandidate ? (
            // awaiting confirmation section
            <SelectedCandidateCard
              candidate={selectedCandidate}
              onConfirm={handleConfirm}
              onCancel={() => {
                setSelectedId(null);
                setIsListOpen(false);
              }}
            />
          ) : (
            // search & browse section
            <>
              <CandidateSearch
                candidates={candidates}
                onSelect={setSelectedId}
              />

              <button
                onClick={() => setIsListOpen(!isListOpen)}
                className="w-full flex items-center justify-between mt-8 mb-2 text-gray-500 text-xs font-bold uppercase tracking-wide hover:text-[#1B2A4B] transition-colors"
              >
                <span>
                  {isListOpen
                    ? "Hide candidate list"
                    : `Browse all ${candidates.length} candidates`}
                </span>
                <span className="text-sm">{isListOpen ? "▲" : "▼"}</span>
              </button>

              {isListOpen && (
                <div className="border border-gray-100 rounded-xl max-h-96 overflow-y-auto bg-white">
                  {candidates.map((candidate) => (
                    <CandidateRow
                      key={candidate.id}
                      candidate={candidate}
                      onSelect={setSelectedId}
                      isSelected={false}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
