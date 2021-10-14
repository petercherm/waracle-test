/* eslint-disable import/export */
import { rootReducer } from "../store/rootReducer";
import { render, RenderResult } from "@testing-library/react";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { getTheme, ThemeName } from "../theme";
import { ThemeProvider } from "styled-components";

const customRender = (
  ui: JSX.Element,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: any = {}
): RenderResult => {
  const Wrapper: FunctionComponent = ({ children }) => {
    const themeName: ThemeName = process.env.NEXT_PUBLIC_THEME as ThemeName;
    const theme = getTheme(themeName);
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
