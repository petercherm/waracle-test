import { call, put, takeEvery } from "redux-saga/effects";
import { requestImages } from "./imageActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { getType } from "typesafe-actions";

function* fetchImages() {
  const { response, error } = yield call(performFetch);
  if (response) {
    yield put(requestImages.success(response));
  } else if (error) {
    yield put(requestImages.failure(error));
  }
}

const performFetch = () => {
  const api = new Request();
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.IMAGES}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function* requestImagesSaga() {
  yield takeEvery(getType(requestImages.request), fetchImages);
}
