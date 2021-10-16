import { takeEvery, call } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { uploadImageAction } from "./uploadActions";
import { Request } from "../../api/request";
import { endpoints } from "../../api/endpoints";
import { AnyAction } from "redux";
import { requestImagesAction } from "../images/imageActions";

function* uploadImage(action: AnyAction) {
  const { response, error } = yield call(performUpload, action.payload);
  if (response) {
    yield put(uploadImageAction.success());
    yield put(requestImagesAction.request());
  } else if (error) {
    yield put(uploadImageAction.failure({ error }));
    yield put(requestImagesAction.request());
  }
}

const performUpload = (file: FormData) => {
  const api = new Request();
  return api
    .post(`${process.env.REACT_APP_API_URL}${endpoints.IMAGES}/upload`, file)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function* uploadImageSaga() {
  yield takeEvery(getType(uploadImageAction.request), uploadImage);
}
