import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  body: {
    color: "black",
    backgroundColor: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: 10
  }
}));
