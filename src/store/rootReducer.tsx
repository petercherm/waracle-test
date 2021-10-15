import { StateType } from "typesafe-actions";
import { combineReducers } from "@reduxjs/toolkit";

import { imagesReducer } from "../state/images/imagesReducer";
import { uploadReducer } from "../state/upload/uploadReducer";
import { favouritesReducer } from "../state/favourites/favouritesReducer";

export const rootReducer = combineReducers({
  images: imagesReducer,
  upload: uploadReducer,
  favourites: favouritesReducer
});

export type ApplicationState = StateType<ReturnType<typeof rootReducer>>;
