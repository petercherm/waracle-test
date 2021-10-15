import { ApplicationState } from "../../store/rootReducer";

export const getCatImages = (state: ApplicationState) => state.images.items;
