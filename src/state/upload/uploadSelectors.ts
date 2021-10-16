import { UploadStatus } from "../../store/rootAction";
import { ApplicationState } from "../../store/rootReducer";

export const getImageUploadStatus = (state: ApplicationState): UploadStatus =>
  state.upload.status;
