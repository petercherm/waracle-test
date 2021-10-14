import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Homepage } from "./layout/homepage";
import { getTheme, ThemeName } from "./theme";
import { GlobalStyle } from "./styles/global.styles";
import { Provider } from "react-redux";
import { store } from "./store/createStore";

function App() {
  const themeName: ThemeName = process.env.REACT_APP_THEME as ThemeName;
  const theme = useMemo(() => getTheme(themeName), [themeName]);
  console.debug(themeName);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
