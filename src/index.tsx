import React from "react";
import { render } from "react-dom";
import App from "./App";
import { store } from "./store/createStore";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "./styles/global.styles";

render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
