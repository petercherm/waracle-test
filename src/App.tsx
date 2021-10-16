import { ThemeProvider } from "styled-components";
import { Homepage } from "./layout/homepage";
import { GlobalStyle } from "./styles/global.styles";
import { Provider } from "react-redux";
import { store } from "./store/createStore";
import { baseTheme } from "./theme/baseTheme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <Homepage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
