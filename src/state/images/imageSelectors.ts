import { RootState } from "../../store/createStore";

export const getImages = (state: RootState) => state.images.items;
export const getImagesFetchStatus = (state: RootState) => state.images.status;
