import styled from "styled-components";
import { VoteType } from "./VoteIcon";

export const VoteIconContainer = styled.div.attrs({ role: "button" })<{
  isDisabled: boolean;
  isUpdating: boolean;
  voteType: VoteType;
}>(({ isDisabled, isUpdating, voteType, theme }) => ({
  transform: voteType === VoteType.UPVOTE ? "rotate(0deg)" : "rotate(180deg)",
  width: "20%",
  height: "80%",
  cursor: isDisabled ? "not-allowed" : "pointer",
  pointerEvents: isDisabled ? "none" : "all",
  transition: "all 0.5s ease-in-out",
  opacity: isUpdating ? 0.5 : 1,

  [":hover"]: {
    ...(voteType === VoteType.UPVOTE
      ? { marginBottom: theme.sizes.small }
      : { marginTop: theme.sizes.small })
  },

  ["svg"]: {
    height: "100%",
    transition: "transform 0.5s ease-in-out",
    transform: isUpdating ? "scale(0.5)" : "scale(1)"
  },

  ["path"]: {
    transition: "all 0.5s ease-in-out"
  }
}));
