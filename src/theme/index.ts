import { DeepPartial } from "../models/common";
import { mergeDeep } from "../utils/common";
import { baseTheme } from "./baseTheme";
import { catTheme } from "./catTheme";

export enum ThemeName {
  BASE_THEME = "baseTheme",
  SAMPLE_THEME = "sampleTheme"
}

const themes: Record<ThemeName, DeepPartial<Theme>> = {
  baseTheme,
  sampleTheme: catTheme
};

export type Theme = typeof baseTheme;

export const getTheme = (themeName: ThemeName): Theme =>
  mergeDeep<Theme, DeepPartial<Theme>>(baseTheme, themes[themeName]);
