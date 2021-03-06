import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./components/App";

import "./index.css";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App {...store.getState()} />
    </Router>
  </Provider>,

  document.getElementById("root")
);
