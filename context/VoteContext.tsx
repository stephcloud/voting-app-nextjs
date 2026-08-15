import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Candidate, VoteState } from "@/types";
import { initialCandidates } from "@/data/candidates";

const STORAGE_KEY = "voting-app-state";

interface VoteContextType extends VoteState {
  castVote: (candidateId: string) => void;
  resetVotes: () => void;
}

const VoteContext = createContext<VoteContextType | undefined>(undefined);

export function VoteProvider({ children }: { children: ReactNode }) {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [hasVoted, setHasVoted] = useState(false);
  const [votedFor, setVotedFor] = useState<string | null>(null);

  // Check localStorage for the first time of loading
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: VoteState = JSON.parse(saved);
      setCandidates(parsed.candidates);
      setHasVoted(parsed.hasVoted);
      setVotedFor(parsed.votedFor);
    }
  }, []);

  // save to localStorage section
  useEffect(() => {
    const state: VoteState = { candidates, hasVoted, votedFor };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [candidates, hasVoted, votedFor]);

  function castVote(candidateId: string) {
    if (hasVoted) return;

    setCandidates((prev) =>
      prev.map((c) =>
        c.id === candidateId ? { ...c, votes: c.votes + 1 } : c,
      ),
    );
    setHasVoted(true);
    setVotedFor(candidateId);
  }

  function resetVotes() {
    setCandidates(initialCandidates);
    setHasVoted(false);
    setVotedFor(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <VoteContext.Provider
      value={{ candidates, hasVoted, votedFor, castVote, resetVotes }}
    >
      {children}
    </VoteContext.Provider>
  );
}

export function useVote() {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVote must be used within a VoteProvider");
  }
  return context;
}
