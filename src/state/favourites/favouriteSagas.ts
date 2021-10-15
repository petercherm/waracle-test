import { call, put, takeEvery } from "redux-saga/effects";
import {
  requestFavouritesAction,
  setFavouriteAction
} from "./favouriteActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { ActionType, getType } from "typesafe-actions";

function* fetchFavourites() {
  const { response, error } = yield call(performFetch);
  if (response) {
    yield put(requestFavouritesAction.success(response));
  } else if (error) {
    yield put(requestFavouritesAction.failure({ error }));
  }
}

function* setFavourite(action: ActionType<typeof setFavouriteAction.request>) {
  const { response, error } = yield call(performSet, action.payload.imageId);
  if (response) {
    yield put(setFavouriteAction.success(response));
    yield put(requestFavouritesAction.request());
  } else if (error) {
    yield put(setFavouriteAction.failure({ error }));
  }
}

const performFetch = () => {
  const api = new Request();
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.FAVOURITES}?limit=50`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

const performSet = (image_id: string) => {
  const api = new Request();
  return api
    .post(`${process.env.REACT_APP_API_URL}${endpoints.FAVOURITES}`, {
      image_id
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function* requestFavouritesSaga() {
  yield takeEvery(getType(requestFavouritesAction.request), fetchFavourites);
}

export function* setFavouritesSaga() {
  yield takeEvery(getType(setFavouriteAction.request), setFavourite);
}
