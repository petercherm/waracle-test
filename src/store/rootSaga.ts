import { all } from "@redux-saga/core/effects";
import {
  requestFavouritesSaga,
  setFavouritesSaga
} from "../state/favourites/favouriteSagas";
import { requestImagesSaga } from "../state/images/imageSagas";
import { uploadImageSaga } from "../state/upload/uploadSagas";

export function* rootSaga() {
  yield all([
    requestImagesSaga(),
    uploadImageSaga(),
    requestFavouritesSaga(),
    setFavouritesSaga()
  ]);
}
