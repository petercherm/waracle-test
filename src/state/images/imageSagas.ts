import { call, put, takeEvery } from "redux-saga/effects";
import { requestImagesAction } from "./imageActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { getType } from "typesafe-actions";

function* fetchImages() {
  const { response, error } = yield call(performFetch);
  if (response) {
    yield put(requestImagesAction.success(response));
  } else if (error) {
    yield put(requestImagesAction.failure({ error }));
  }
}

const performFetch = () => {
  const api = new Request();
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.IMAGES}?limit=50`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function* requestImagesSaga() {
  yield takeEvery(getType(requestImagesAction.request), fetchImages);
}
