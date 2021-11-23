import { RootState } from "../../store/createStore";

export const getFavourites = (state: RootState) => state.favourites.items;
export const getFavouritesStatus = (state: RootState) =>
  state.favourites.status;
