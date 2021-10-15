import { all } from "@redux-saga/core/effects";
import { requestImagesSaga } from "../state/images/imageSagas";

export function* rootSaga() {
  yield all([requestImagesSaga()]);
}
