import { Candidate } from "@/types";

interface SelectedCandidateCardProps {
  candidate: Candidate;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function SelectedCandidateCard({
  candidate,
  onConfirm,
  onCancel,
}: SelectedCandidateCardProps) {
  return (
    <div className="border-2 border-[#F5A623] bg-[#FFF9EE] rounded-xl p-6 text-center font-['Inter']">
      <p className="text-xs font-bold text-[#F5A623] uppercase tracking-wide mb-1">
        You selected
      </p>
      <h3 className="text-2xl font-extrabold text-[#1B2A4B] mb-1">
        {candidate.name}
      </h3>
      {candidate.description && (
        <p className="text-gray-500 text-sm mb-5">{candidate.description}</p>
      )}

      <div className="flex justify-center gap-3">
        <button
          onClick={onConfirm}
          className="bg-[#F5A623] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e0951b] transition-colors"
        >
          Confirm Vote
        </button>
        <button
          onClick={onCancel}
          className="border-2 border-gray-300 text-gray-500 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Change
        </button>
      </div>
    </div>
  );
}
