import { ActionType, createAsyncAction } from "typesafe-actions";
import { FavouritesResponse } from "../../models/theCatApi/favourites.models";

export enum FavouritesActionTypes {
  FETCH_FAVOURITES_REQUEST = "@fetch/FETCH_FAVOURITES_REQUEST",
  FETCH_FAVOURITES_SUCCESS = "@fetch/FETCH_FAVOURITES_SUCCESS",
  FETCH_FAVOURITES_FAILURE = "@fetch/FETCH_FAVOURITES_FAILURE",

  SET_FAVOURITE_REQUEST = "@set/SET_FAVOURITE_REQUEST",
  SET_FAVOURITE_SUCCESS = "@set/SET_FAVOURITE_SUCCESS",
  SET_FAVOURITE_FAILURE = "@set/SET_FAVOURITE_FAILURE"
}

interface RequestFavouritesFailure {
  error: { message: string };
}

interface SetFavouriteRequest {
  imageId: string;
}

export const requestFavouritesAction = createAsyncAction(
  FavouritesActionTypes.FETCH_FAVOURITES_REQUEST,
  FavouritesActionTypes.FETCH_FAVOURITES_SUCCESS,
  FavouritesActionTypes.FETCH_FAVOURITES_FAILURE
)<undefined, FavouritesResponse, RequestFavouritesFailure>();

export const setFavouriteAction = createAsyncAction(
  FavouritesActionTypes.SET_FAVOURITE_REQUEST,
  FavouritesActionTypes.SET_FAVOURITE_SUCCESS,
  FavouritesActionTypes.SET_FAVOURITE_FAILURE
)<SetFavouriteRequest, any, RequestFavouritesFailure>();

export type FavouriteActions =
  | ActionType<typeof requestFavouritesAction>
  | ActionType<typeof setFavouriteAction>;
