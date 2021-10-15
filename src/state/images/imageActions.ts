import { ActionType, createAsyncAction } from "typesafe-actions";
import { ImageResponse } from "../../models/theCatApi/image.models";

export enum ImageActionTypes {
  FETCH_IMAGES_REQUEST = "@fetch/FETCH_IMAGES_REQUEST",
  FETCH_IMAGES_SUCCESS = "@fetch/FETCH_IMAGES_SUCCESS",
  FETCH_IMAGES_FAILURE = "@fetch/FETCH_IMAGES_FAILURE"
}

interface RequestImagesFailure {
  error: { message: string };
}

export const requestImagesAction = createAsyncAction(
  ImageActionTypes.FETCH_IMAGES_REQUEST,
  ImageActionTypes.FETCH_IMAGES_SUCCESS,
  ImageActionTypes.FETCH_IMAGES_FAILURE
)<undefined, ImageResponse, RequestImagesFailure>();

export type ImageActions = ActionType<typeof requestImagesAction>;
