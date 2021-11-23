import { RootState } from "../../store/createStore";

export const getVotes = (state: RootState) => state.votes.items;
export const getVotesStatus = (state: RootState) => state.votes.status;
