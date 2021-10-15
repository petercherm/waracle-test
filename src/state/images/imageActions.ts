import { ActionType, createAsyncAction } from "typesafe-actions";
import { ImageResponse } from "../../models/theCatApi/image.models";

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
)<undefined, ImageResponse, RequestImagesFailure>();

export type CatActions = ActionType<typeof requestImages>;
