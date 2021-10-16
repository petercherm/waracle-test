import { VoteIcon, VoteType } from "../voteIcon/VoteIcon";
import { VoteContainer } from "./Vote.styles";

export const Vote = () => {
  return (
    <VoteContainer>
      <VoteIcon
        voteType={VoteType.UPVOTE}
        isDisabled={false}
        isUpdating={false}
        onVote={() => ({})}
      />
      <span>10</span>
      <VoteIcon
        voteType={VoteType.DOWNVOTE}
        isDisabled={false}
        isUpdating={false}
        onVote={() => ({})}
      />
    </VoteContainer>
  );
};
