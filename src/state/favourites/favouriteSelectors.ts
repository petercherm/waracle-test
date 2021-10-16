import { ApplicationState } from "../../store/rootReducer";
import { FavouriteItem, FavouritesStatus } from "./favouritesReducer";

export const getFavourites = (state: ApplicationState): FavouriteItem[] =>
  state.favourites.items;
export const getFavouritesStatus = (
  state: ApplicationState
): FavouritesStatus => state.favourites.status;
