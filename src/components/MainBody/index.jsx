import React, { Fragment } from "react";
import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import "./style.css";
import { Route, withRouter } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

import DayView from "../DayView/index";
import Stats from "../Stats/index";
import "./style.css";

export default function MainBody(props) {
  return (
    <Fragment>
      <div className="background">
        <Route exact path="/dashboard/stats" component={Stats} />
        <Route exact path="/dashboard/day" component={DayView} />
      </div>
    </Fragment>
  );
}
