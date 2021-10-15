import { all } from "@redux-saga/core/effects";
import { requestImagesSaga } from "../state/images/imageSagas";
import { uploadImageSaga } from "../state/upload/uploadSagas";

export function* rootSaga() {
  yield all([requestImagesSaga(), uploadImageSaga()]);
}
