import { StateType } from "typesafe-actions";
import { combineReducers } from "@reduxjs/toolkit";

import { imagesReducer } from "../state/images/imagesReducer";

export const rootReducer = combineReducers({
  images: imagesReducer
});

export type ApplicationState = StateType<ReturnType<typeof rootReducer>>;
