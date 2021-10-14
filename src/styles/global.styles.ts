import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  body: {
    color: theme.colors.primaryTextColor,
    backgroundColor: theme.colors.backgroundColor,
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: 10
  }
}));
