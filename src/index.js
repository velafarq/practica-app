import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
