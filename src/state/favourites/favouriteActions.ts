import { ActionType, createAsyncAction } from "typesafe-actions";
import { FavouritesResponse } from "../../models/theCatApi/favourites.models";

export enum FavouritesActionTypes {
  FETCH_FAVOURITES_REQUEST = "@fetch/FETCH_FAVOURITES_REQUEST",
  FETCH_FAVOURITES_SUCCESS = "@fetch/FETCH_FAVOURITES_SUCCESS",
  FETCH_FAVOURITES_FAILURE = "@fetch/FETCH_FAVOURITES_FAILURE"
}

interface RequestFavouritesFailure {
  error: { message: string };
}

export const requestFavouritesAction = createAsyncAction(
  FavouritesActionTypes.FETCH_FAVOURITES_REQUEST,
  FavouritesActionTypes.FETCH_FAVOURITES_SUCCESS,
  FavouritesActionTypes.FETCH_FAVOURITES_FAILURE
)<undefined, FavouritesResponse, RequestFavouritesFailure>();

export type FavouriteActions = ActionType<typeof requestFavouritesAction>;
