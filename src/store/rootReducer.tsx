import { StateType } from "typesafe-actions";
import { combineReducers } from "@reduxjs/toolkit";

import { imagesReducer } from "../state/images/imagesReducer";
import { uploadReducer } from "../state/upload/uploadReducer";

export const rootReducer = combineReducers({
  images: imagesReducer,
  upload: uploadReducer
});

export type ApplicationState = StateType<ReturnType<typeof rootReducer>>;
