import { ActionType, createAsyncAction } from "typesafe-actions";

export enum UploadActionTypes {
  UPLOAD_IMAGE_REQUEST = "@upload/UPLOAD_IMAGE_REQUEST",
  UPLOAD_IMAGE_SUCCESS = "@upload/UPLOAD_IMAGE_SUCCESS",
  UPLOAD_IMAGE_FAILURE = "@upload/UPLOAD_IMAGE_FAILURE"
}

interface RequestUploadFailure {
  error: string;
}

export const uploadImageAction = createAsyncAction(
  UploadActionTypes.UPLOAD_IMAGE_REQUEST,
  UploadActionTypes.UPLOAD_IMAGE_SUCCESS,
  UploadActionTypes.UPLOAD_IMAGE_FAILURE
)<undefined, undefined, RequestUploadFailure>();

export type UploadActions = ActionType<typeof uploadImageAction>;
