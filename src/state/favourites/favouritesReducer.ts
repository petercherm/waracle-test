import { FetchStatus, RootAction } from "../../store/rootAction";
import { createReducer } from "typesafe-actions";
import { requestFavouritesAction } from "./favouriteActions";

export interface FavouritesState {
  items: any[];
  status: FetchStatus;
}

export const favouritesInitialState: FavouritesState = {
  items: [],
  status: {
    isFetching: false,
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
    items: [],
    status: {
      ...favouritesInitialState.status,
      isError: true,
      error: action.payload.error.message
    }
  }));
