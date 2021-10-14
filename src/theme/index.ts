import { DeepPartial } from "../models/common";
import { mergeDeep } from "../utils/common";
import { baseTheme } from "./baseTheme";
import { sampleTheme } from "./sampleTheme";

export enum ThemeName {
  BASE_THEME = "baseTheme",
  SAMPLE_THEME = "sampleTheme"
}

const themes: Record<ThemeName, DeepPartial<Theme>> = {
  baseTheme,
  sampleTheme
};

export type Theme = typeof baseTheme;

export const getTheme = (themeName: ThemeName): Theme =>
  mergeDeep<Theme, DeepPartial<Theme>>(baseTheme, themes[themeName]);
