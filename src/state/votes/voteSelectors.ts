import { ApplicationState } from "../../store/rootReducer";

export const getVotes = (state: ApplicationState) => state.votes.items;
export const getVotesStatus = (state: ApplicationState) => state.votes.status;
