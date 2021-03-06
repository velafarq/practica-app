import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import "./style.css";
import Header from "../Header/index";
import LandingPage from "../LandingPage/index";
import Dashboard from "../Dashboard/index";

import LoginForm from "../LoginForm/index";
import RegisterForm from "../RegisterForm/index";
import NotesView from "../NotesView";
import TaskView from "../TaskView";
import ProjectArchive from "../ProjectArchive/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/archive" component={ProjectArchive} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/notes" component={NotesView} />
        <Route exact path="/dashboard/:projectId" component={TaskView} />
      </Fragment>
    );
  }
}

export default App;
