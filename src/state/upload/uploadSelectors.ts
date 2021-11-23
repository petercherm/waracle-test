import { RootState } from "../../store/createStore";

export const getImageUploadStatus = (state: RootState) => state.upload.status;
