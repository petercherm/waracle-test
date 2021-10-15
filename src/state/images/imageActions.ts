import { ActionType, createAsyncAction, getType } from "typesafe-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";

/* *** ACTIONS *** */

export enum ImageActions {
  FETCH_IMAGES_REQUEST = "@fetch/FETCH_IMAGES_REQUEST",
  FETCH_IMAGES_SUCCESS = "@fetch/FETCH_IMAGES_SUCCESS",
  FETCH_IMAGES_FAILURE = "@fetch/FETCH_IMAGES_FAILURE"
}

interface RequestImagesFailure {
  error: string;
}

export const requestImages = createAsyncAction(
  ImageActions.FETCH_IMAGES_REQUEST,
  ImageActions.FETCH_IMAGES_SUCCESS,
  ImageActions.FETCH_IMAGES_FAILURE
)<undefined, any[], RequestImagesFailure>();

export type CatActions = ActionType<typeof requestImages>;

/* *** SAGAS *** */
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
