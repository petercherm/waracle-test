import { ActionType } from "typesafe-actions";
import * as imageActions from "../state/images/imageActions";
import * as uploadActions from "../state/upload/uploadActions";

const allActions = {
  imageActions,
  uploadActions
};

type AllActions = typeof allActions;

export type RootAction = ActionType<AllActions>;

export interface FetchStatus {
  isFetching: boolean;
  isError: boolean;
  error?: string;
}

export interface UploadStatus {
  isUploading: boolean;
  isError: boolean;
  error?: string;
}
