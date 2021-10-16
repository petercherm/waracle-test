import { call, put, takeEvery } from "redux-saga/effects";
import { requestVotesAction, setVoteAction } from "./voteActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { ActionType, getType } from "typesafe-actions";
import { VoteItem } from "./votesReducer";
import { VotesType } from "../../models/theCatApi/votes.models";

function* fetchVotes() {
  const { response, error } = yield call(performFetch);
  if (response) {
    // NOTE: we don't need the entire response, just the IDs
    const voteIds: VoteItem[] = response.reduce(
      (acc: VoteItem[], curr: VotesType) => {
        return [...acc, { id: curr.id, imageId: curr.image_id }];
      },
      []
    );
    yield put(requestVotesAction.success(voteIds));
  } else if (error) {
    yield put(requestVotesAction.failure({ error }));
  }
}

function* setFavourite(action: ActionType<typeof setVoteAction.request>) {
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

const performFetch = () => {
  const api = new Request();
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.VOTE}?limit=50`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

const performSet = (image_id: string, value: 0 | 1) => {
  const api = new Request();
  return api
    .post(`${process.env.REACT_APP_API_URL}${endpoints.FAVOURITES}`, {
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
  yield takeEvery(getType(setVoteAction.request), setFavourite);
}
