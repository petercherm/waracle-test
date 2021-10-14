import { ActionType } from "typesafe-actions";
import * as sampleActions from "../state/sample/sampleActions";

const allActions = {
  sampleActions
};

type AllActions = typeof allActions;

export type RootAction = ActionType<AllActions>;
