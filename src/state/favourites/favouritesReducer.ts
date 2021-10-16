import { FetchStatus, RootAction } from "../../store/rootAction";
import { createReducer } from "typesafe-actions";
import {
  requestFavouritesAction,
  setFavouriteAction,
  unsetFavouriteAction
} from "./favouriteActions";

export interface FavouriteItem {
  id: number;
  imageId: string;
}
export interface FavouritesStatus extends FetchStatus {
  updatingImageId: string;
  isUpdating: boolean;
}
export interface FavouritesState {
  items: FavouriteItem[];
  status: FavouritesStatus;
}

export const favouritesInitialState: FavouritesState = {
  items: [],
  status: {
    isFetching: false,
    isUpdating: false,
    updatingImageId: "",
    isError: false,
    error: ""
  }
};

export const favouritesReducer = createReducer<FavouritesState, RootAction>(
  favouritesInitialState
)
  .handleAction(requestFavouritesAction.request, (state) => ({
    ...state,
    status: {
      ...favouritesInitialState.status,
      isFetching: true
    }
  }))
  .handleAction(requestFavouritesAction.success, (state, action) => ({
    ...state,
    items: action.payload,
    status: favouritesInitialState.status
  }))
  .handleAction(requestFavouritesAction.failure, (state, action) => ({
    ...state,
    status: {
      ...favouritesInitialState.status,
      isError: true,
      error: action.payload.error.message
    }
  }))
  .handleAction(
    [setFavouriteAction.request, unsetFavouriteAction.request],
    (state, action) => ({
      ...state,
      status: {
        ...state.status,
        isUpdating: true,
        updatingImageId: action.payload.imageId
      }
    })
  )
  .handleAction(
    [
      setFavouriteAction.success,
      setFavouriteAction.failure,
      unsetFavouriteAction.success,
      unsetFavouriteAction.failure
    ],
    (state) => ({
      ...state,
      status: {
        ...state.status,
        isUpdating: false,
        updatingImageId: ""
      }
    })
  );
