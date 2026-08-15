export interface Candidate {
  id: string;
  name: string;
  description?: string;
  votes: number;
}

export interface VoteState {
  candidates: Candidate[];
  hasVoted: boolean;
  votedFor: string | null;
}


