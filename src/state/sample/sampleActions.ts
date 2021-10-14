import { ActionType, createAction } from "typesafe-actions";

export const setSampleText = createAction("SET_SAMPLE_TEXT")<string>();

export type SampleActions = ActionType<typeof setSampleText>;
