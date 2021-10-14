import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Homepage } from "./layout/homepage";
import { getTheme, ThemeName } from "./theme";

function App() {
  const themeName: ThemeName = process.env.NEXT_PUBLIC_THEME as ThemeName;
  const theme = useMemo(() => getTheme(themeName), [themeName]);

  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
