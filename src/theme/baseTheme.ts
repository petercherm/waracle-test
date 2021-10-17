import { mediaQuery } from "../styles/breakpoints";

export const baseTheme = {
  colors: {
    primaryTextColor: "#000",
    primaryColor: "#666",
    hightLightColor: "#900",
    backgroundColor: "#fff",
    headerColor: "#ddd",
    addImageColor: "#eee",
    hoverBackgroundColor: "#ddd",
    overlayColor: "rgba(0,0,0,0.7)",
    buttonColor: "#ccc"
  },
  sizes: {
    xSmall: "0.25rem",
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
    xLarge: "3rem"
  },
  fontSizes: {
    xSmall: "0.8rem",
    small: "1rem",
    medium: "1.2rem",
    large: "1.4rem",
    xlarge: "1.8rem"
  },
  widths: {
    maxContentWidth: 1280
  },
  mediaQuery
};
