import { StateType } from "typesafe-actions";
import { combineReducers } from "@reduxjs/toolkit";

import { sampleReducer } from "../state/sample/sampleReducer";

export const rootReducer = combineReducers({
  sample: sampleReducer
});

export type ApplicationState = StateType<ReturnType<typeof rootReducer>>;
