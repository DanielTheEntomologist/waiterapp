import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/normalize.scss";
import "./styles/global.scss";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

// use strict mode to create a root

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
