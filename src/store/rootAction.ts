import { ActionType } from "typesafe-actions";
import * as imageActions from "../state/images/imageActions";

const allActions = {
  imageActions
};

type AllActions = typeof allActions;

export type RootAction = ActionType<AllActions>;
