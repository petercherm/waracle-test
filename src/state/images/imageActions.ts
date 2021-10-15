import { ActionType, createAsyncAction } from "typesafe-actions";

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
