import { UploadStatus, RootAction } from "../../store/rootAction";
import { createReducer } from "typesafe-actions";
import { uploadImageAction } from "./uploadActions";

export interface UploadState {
  status: UploadStatus;
}

export const uploadInitialState: UploadState = {
  status: {
    isUploading: false,
    isError: false,
    error: ""
  }
};

export const uploadReducer = createReducer<UploadState, RootAction>(
  uploadInitialState
)
  .handleAction(uploadImageAction.request, (state) => ({
    ...state,
    status: {
      ...uploadInitialState.status,
      isUploading: true
    }
  }))
  .handleAction(uploadImageAction.success, (state) => ({
    ...state,
    status: uploadInitialState.status
  }))
  .handleAction(uploadImageAction.failure, (state, action) => ({
    ...state,
    status: {
      ...uploadInitialState.status,
      isError: true,
      error: action.payload.error
    }
  }));
