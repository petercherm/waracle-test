import { ApplicationState } from "../../store/rootReducer";
import { Score, VotesStatus } from "./votesReducer";

export const getVotes = (state: ApplicationState): Score => state.votes.items;
export const getVotesStatus = (state: ApplicationState): VotesStatus =>
  state.votes.status;
