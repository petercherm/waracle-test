import { all } from "@redux-saga/core/effects";
import {
  requestFavouritesSaga,
  setFavouritesSaga,
  unsetFavouritesSaga
} from "../state/favourites/favouriteSagas";
import { requestImagesSaga } from "../state/images/imageSagas";
import { uploadImageSaga } from "../state/upload/uploadSagas";
import { requestVotesSaga, setVoteSaga } from "../state/votes/voteSagas";

export function* rootSaga() {
  yield all([
    requestImagesSaga(),
    uploadImageSaga(),
    requestFavouritesSaga(),
    setFavouritesSaga(),
    unsetFavouritesSaga(),
    requestVotesSaga(),
    setVoteSaga()
  ]);
}
