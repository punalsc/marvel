import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./tailwind.generated.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import MainContext from "./Context/MainContext";

const { Provider } = MainContext;

ReactDOM.render(
  <Provider
    value={{
      headerBg: ["hulk", "deadpool", "thanos", "venom"].map(
        (bg) => `./backgrounds/${bg}.jpg`
      ),
    }}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
