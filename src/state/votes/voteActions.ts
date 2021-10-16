import { ActionType, createAsyncAction } from "typesafe-actions";
import { Score } from "./votesReducer";

export enum VotesActionTypes {
  FETCH_VOTES_REQUEST = "@fetch/FETCH_VOTES_REQUEST",
  FETCH_VOTES_SUCCESS = "@fetch/FETCH_VOTES_SUCCESS",
  FETCH_VOTES_FAILURE = "@fetch/FETCH_VOTES_FAILURE",

  SET_VOTE_REQUEST = "@set/SET_VOTE_REQUEST",
  SET_VOTE_SUCCESS = "@set/SET_VOTE_SUCCESS",
  SET_VOTE_FAILURE = "@set/SET_VOTE_FAILURE",

  UNSET_VOTE_REQUEST = "@set/UNSET_VOTE_REQUEST",
  UNSET_VOTE_SUCCESS = "@set/UNSET_VOTE_SUCCESS",
  UNSET_VOTE_FAILURE = "@set/UNSET_VOTE_FAILURE"
}

interface RequestVotesFailure {
  error: { message: string };
}

interface SetVoteRequest {
  imageId: string;
  value: 0 | 1;
}

export const requestVotesAction = createAsyncAction(
  VotesActionTypes.FETCH_VOTES_REQUEST,
  VotesActionTypes.FETCH_VOTES_SUCCESS,
  VotesActionTypes.FETCH_VOTES_FAILURE
)<undefined, Score, RequestVotesFailure>();

export const setVoteAction = createAsyncAction(
  VotesActionTypes.SET_VOTE_REQUEST,
  VotesActionTypes.SET_VOTE_SUCCESS,
  VotesActionTypes.SET_VOTE_FAILURE
)<SetVoteRequest, undefined, RequestVotesFailure>();

export type VoteActions =
  | ActionType<typeof requestVotesAction>
  | ActionType<typeof setVoteAction>;
