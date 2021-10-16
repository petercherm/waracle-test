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

const api = new Request(); // usually it's initiated for each endpoint if they require secific attributes

function* fetchFavourites() {
  const { response, error } = yield call(performFetch);
  if (response) {
    /* NOTE: we don't need the entire response, just the IDs
       Things like that ideally should be handled on the BE-side */
    const favouriteIds: FavouriteItem[] = response.reduce(
      (acc: FavouriteItem[], curr: FavouritesType) => {
        return [...acc, { id: curr.id, imageId: curr.image_id }];
      },
      []
    );
    yield put(requestFavouritesAction.success(favouriteIds));
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
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.FAVOURITES}?limit=50`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

//NOTE: Fetches have been extracted to separate functions to make saga testing possible
const performSet = (image_id: string) => {
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
