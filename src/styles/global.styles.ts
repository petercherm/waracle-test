import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  ["*"]: {
    boxSizing: "border-box"
  },
  html: {
    fontSize: 12,
    transition: `all 0.5s ease-in-out`,
    [theme.mediaQuery.tablet]: {
      fontSize: 16
    }
  },
  body: {
    color: theme.colors.primaryTextColor,
    backgroundColor: theme.colors.backgroundColor,
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: 0
  }
}));
