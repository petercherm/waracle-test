import { call, put, takeEvery } from "redux-saga/effects";
import { requestFavouritesAction } from "./favouriteActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { getType } from "typesafe-actions";

function* fetchFavourites() {
  const { response, error } = yield call(performFetch);
  if (response) {
    yield put(requestFavouritesAction.success(response));
  } else if (error) {
    yield put(requestFavouritesAction.failure({ error }));
  }
}

const performFetch = () => {
  const api = new Request();
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.IMAGES}?limit=50`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function* requestFavouritesSaga() {
  yield takeEvery(getType(requestFavouritesAction.request), fetchFavourites);
}
