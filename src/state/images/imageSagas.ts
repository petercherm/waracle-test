import { call, put, takeEvery } from "redux-saga/effects";
import { requestImagesAction } from "./imageActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { getType } from "typesafe-actions";

const api = new Request(); // usually it's initiated for each endpoint if they require secific attributes

function* fetchImages() {
  const { response, error } = yield call(performFetch);
  if (response) {
    yield put(requestImagesAction.success(response));
  } else if (error) {
    yield put(requestImagesAction.failure({ error }));
  }
}
//NOTE: Fetch has been extracted to a separate function to make saga testing possible
const performFetch = () => {
  return api
    .get(`${process.env.REACT_APP_API_URL}${endpoints.IMAGES}?limit=50`)
    .then((response) => ({ response }))
    .catch((error) => {
      if (error.response) {
        return {
          error: { message: error?.response?.data?.message || "Unknown error" }
        };
      }
      return { error };
    });
};

export function* requestImagesSaga() {
  yield takeEvery(getType(requestImagesAction.request), fetchImages);
}
