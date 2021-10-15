import { ApplicationState } from "../../store/rootReducer";

export const getImages = (state: ApplicationState) => state.images.items;
export const getImagesFetchStatus = (state: ApplicationState) =>
  state.images.status;
