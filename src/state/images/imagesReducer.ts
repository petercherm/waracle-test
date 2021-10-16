import { FetchStatus, RootAction } from "../../store/rootAction";
import { createReducer } from "typesafe-actions";
import { requestImagesAction } from "./imageActions";
import { ImageType } from "../../models/theCatApi/image.models";

export interface ImagesState {
  items: ImageType[];
  status: FetchStatus;
}

export const imagesInitialState: ImagesState = {
  items: [],
  status: {
    isFetching: false,
    isError: false,
    error: ""
  }
};

export const imagesReducer = createReducer<ImagesState, RootAction>(
  imagesInitialState
)
  .handleAction(requestImagesAction.request, (state) => ({
    ...state,
    status: {
      ...imagesInitialState.status,
      isFetching: true
    }
  }))
  .handleAction(requestImagesAction.success, (state, action) => ({
    ...state,
    items: action.payload,
    status: imagesInitialState.status
  }))
  .handleAction(requestImagesAction.failure, (state, action) => ({
    ...state,
    items: [],
    status: {
      ...imagesInitialState.status,
      isError: true,
      error: action.payload.error.message
    }
  }));
