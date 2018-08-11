import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import "./style.css";
import Header from "../Header/index";
import LandingPage from "../LandingPage/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route exact path="/" component={LandingPage} />
      </Fragment>
    );
  }
}

export default App;
