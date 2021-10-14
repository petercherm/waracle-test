import { RootAction } from "../../store/rootAction";
import { createReducer } from "typesafe-actions";
import { setSampleText } from "./sampleActions";

export interface SampleState {
  sampleText: string;
}

export const sampleInitialState: SampleState = {
  sampleText: "This is the initial text."
};

export const sampleReducer = createReducer<SampleState, RootAction>(
  sampleInitialState
).handleAction(setSampleText, (state, action) => ({
  ...state,
  sampleText: action.payload
}));
