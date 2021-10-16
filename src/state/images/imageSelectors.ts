import { ImageType } from "../../models/theCatApi/image.models";
import { FetchStatus } from "../../store/rootAction";
import { ApplicationState } from "../../store/rootReducer";

export const getImages = (state: ApplicationState): ImageType[] =>
  state.images.items;
export const getImagesFetchStatus = (state: ApplicationState): FetchStatus =>
  state.images.status;
