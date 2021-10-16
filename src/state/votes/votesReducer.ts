import { FetchStatus, RootAction } from "../../store/rootAction";
import { createReducer } from "typesafe-actions";
import { requestVotesAction, setVoteAction } from "./voteActions";

export interface ScoreType {
  score: number;
}

export type Score = Record<string, ScoreType>;
export interface VotesStatus extends FetchStatus {
  updatingImageId: string;
  isUpdating: boolean;
}
export interface VotesState {
  items: Score;
  status: VotesStatus;
}

export const votesInitialState: VotesState = {
  items: {},
  status: {
    isFetching: false,
    isUpdating: false,
    updatingImageId: "",
    isError: false,
    error: ""
  }
};

export const votesReducer = createReducer<VotesState, RootAction>(
  votesInitialState
)
  .handleAction(requestVotesAction.request, (state) => ({
    ...state,
    status: {
      ...votesInitialState.status,
      isFetching: true
    }
  }))
  .handleAction(requestVotesAction.success, (state, action) => ({
    ...state,
    items: action.payload,
    status: votesInitialState.status
  }))
  .handleAction(requestVotesAction.failure, (state, action) => ({
    ...state,
    status: {
      ...votesInitialState.status,
      isError: true,
      error: action.payload.error.message
    }
  }))
  .handleAction(setVoteAction.request, (state, action) => ({
    ...state,
    status: {
      ...state.status,
      isUpdating: true,
      updatingImageId: action.payload.imageId
    }
  }))
  .handleAction([setVoteAction.success, setVoteAction.failure], (state) => ({
    ...state,
    status: {
      ...state.status,
      isUpdating: false,
      updatingImageId: ""
    }
  }));
