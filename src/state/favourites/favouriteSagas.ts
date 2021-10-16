import { call, put, takeEvery } from "redux-saga/effects";
import {
  requestFavouritesAction,
  setFavouriteAction,
  unsetFavouriteAction
} from "./favouriteActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { ActionType, getType } from "typesafe-actions";
import { FavouritesType } from "../../models/theCatApi/favourites.models";
import { FavouriteItem } from "./favouritesReducer";

function* fetchFavourites() {
  const { response, error } = yield call(performFetch);
  if (response) {
    // NOTE: we don't need the entire response, just the image IDs
    const imageIds: FavouriteItem[] = response.reduce(
      (acc: FavouriteItem[], curr: FavouritesType) => {
        return [...acc, { id: curr.id, imageId: curr.image_id }];
      },
      []
    );
    yield put(requestFavouritesAction.success(imageIds));
  } else if (error) {
    yield put(requestFavouritesAction.failure({ error }));
  }
}

function* setFavourite(action: ActionType<typeof setFavouriteAction.request>) {
  const { response, error } = yield call(performSet, action.payload.imageId);
  if (response) {
    yield put(setFavouriteAction.success());
    yield put(requestFavouritesAction.request());
  } else if (error) {
    yield put(setFavouriteAction.failure({ error }));
  }
}

function* unsetFavourite(
  action: ActionType<typeof unsetFavouriteAction.request>
) {
  const { response, error } = yield call(
    performUnset,
    action.payload.favouriteId
  );
  if (response) {
    yield put(unsetFavouriteAction.success());
    yield put(requestFavouritesAction.request());
  } else if (error) {
    yield put(unsetFavouriteAction.failure({ error }));
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

const performUnset = (favouriteId: number) => {
  const api = new Request();
  return api
    .delete(
      `${process.env.REACT_APP_API_URL}${endpoints.FAVOURITES}/${favouriteId}`
    )
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function* requestFavouritesSaga() {
  yield takeEvery(getType(requestFavouritesAction.request), fetchFavourites);
}

export function* setFavouritesSaga() {
  yield takeEvery(getType(setFavouriteAction.request), setFavourite);
}

export function* unsetFavouritesSaga() {
  yield takeEvery(getType(unsetFavouriteAction.request), unsetFavourite);
}
