import { DeepPartial } from "../models/common";
import { Theme } from ".";

/* It's just a sample theme, you can override any values from the main theme
   but you cannot use any new values that do not exist in the baseTheme */

export const sampleTheme: DeepPartial<Theme> = {
  colors: {
    hightLightColor: "#900"
  }
};
