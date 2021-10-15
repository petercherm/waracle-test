import { ApplicationState } from "../../store/rootReducer";

export const getImageUploadStatus = (state: ApplicationState) =>
  state.upload.status;
