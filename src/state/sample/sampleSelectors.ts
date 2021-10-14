import { ApplicationState } from "../../store/rootReducer";

export const getSampleText = (state: ApplicationState): string =>
  state.sample.sampleText;
