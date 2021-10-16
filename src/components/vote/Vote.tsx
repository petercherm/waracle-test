import { VoteIcon, VoteType } from "../voteIcon/VoteIcon";
import { VoteContainer } from "./Vote.styles";

export interface VoteProps {
  isUpdating: boolean;
  isDisabled: boolean;
  onVote: (value: 0 | 1) => void;
  score: number;
}

export const Vote = ({ isUpdating, isDisabled, onVote, score }: VoteProps) => {
  return (
    <VoteContainer>
      <VoteIcon
        voteType={VoteType.UPVOTE}
        isDisabled={isDisabled}
        isUpdating={isUpdating}
        onVote={onVote}
      />
      <span>{score}</span>
      <VoteIcon
        voteType={VoteType.DOWNVOTE}
        isDisabled={isDisabled}
        isUpdating={isUpdating}
        onVote={onVote}
      />
    </VoteContainer>
  );
};
