import { baseTheme } from "./baseTheme";

export enum ThemeName {
  BASE_THEME = "baseTheme",
  SAMPLE_THEME = "sampleTheme"
}

export type Theme = typeof baseTheme;
