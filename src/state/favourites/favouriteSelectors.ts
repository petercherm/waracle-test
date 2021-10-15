import { ApplicationState } from "../../store/rootReducer";

export const getFavourites = (state: ApplicationState) =>
  state.favourites.items;
export const getImagesFetchStatus = (state: ApplicationState) =>
  state.favourites.status;
