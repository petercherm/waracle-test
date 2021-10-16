import { call, put, takeEvery } from "redux-saga/effects";
import { requestVotesAction, setVoteAction } from "./voteActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { ActionType, getType } from "typesafe-actions";
import { VotesType } from "../../models/theCatApi/votes.models";
import { Score } from "./votesReducer";

const api = new Request(); // usually it's initiated for each endpoint if they require secific attributes

function* fetchVotes() {
  const { response, error } = yield call(performFetch);
  if (response) {
    // NOTE: we need to calculate the score for each item
    const voteImageScores: Score = response.reduce(
      (acc: Score, curr: VotesType) => {
        const image = acc[curr.image_id];
        const score = image?.score || 0;
        const newScore = score + (curr.value || -1);
        return { ...acc, [curr.image_id]: { score: newScore } };
      },
      {}
    );
    yield put(requestVotesAction.success(voteImageScores));
  } else if (error) {
    yield put(requestVotesAction.failure({ error }));
  }
}

function* setVote(action: ActionType<typeof setVoteAction.request>) {
  const { response, error } = yield call(
    performSet,
    action.payload.imageId,
    action.payload.value
  );
  if (response) {
    yield put(setVoteAction.success());
    yield put(requestVotesAction.request());
  } else if (error) {
    yield put(setVoteAction.failure({ error }));
  }
}

//NOTE: Fetches have been extracted to separate functions to make saga testing possible
const performFetch = () => {
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.VOTE}?limit=10000`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

const performSet = (image_id: string, value: 0 | 1) => {
  return api
    .post(`${process.env.REACT_APP_API_URL}${endpoints.VOTE}`, {
      image_id,
      value
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function* requestVotesSaga() {
  yield takeEvery(getType(requestVotesAction.request), fetchVotes);
}

export function* setVoteSaga() {
  yield takeEvery(getType(setVoteAction.request), setVote);
}
