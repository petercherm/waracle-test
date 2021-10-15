import { FetchStatus, RootAction } from "../../store/rootAction";
import { createReducer } from "typesafe-actions";
import { requestImages } from "./imageActions";

export interface ImagesState {
  items: any[];
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
  .handleAction(requestImages.request, (state) => ({
    ...state,
    status: {
      ...state.status,
      isFetching: true,
      isError: false
    }
  }))
  .handleAction(requestImages.success, (state, action) => ({
    ...state,
    items: action.payload,
    status: {
      ...state.status,
      isFetching: false,
      isError: false
    }
  }))
  .handleAction(requestImages.failure, (state, action) => ({
    ...state,
    items: [],
    status: {
      ...state.status,
      isFetching: false,
      isError: true,
      error: action.payload.error
    }
  }));
