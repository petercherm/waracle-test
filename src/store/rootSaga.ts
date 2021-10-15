import { all } from "@redux-saga/core/effects";
import { requestImagesSaga } from "../state/images/imageActions";

export function* rootSaga() {
  yield all([requestImagesSaga()]);
}
