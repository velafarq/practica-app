import React, { Fragment } from "react";
import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import "./style.css";
import { Route, withRouter } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

import WeekNav from "../WeekNav/index";
import Docket from "../Docket/index";
import TaskSection from "../TaskSection/index";

import Stats from "../Stats/index";

import "./style.css";

export default function Dashboard(props) {
  return (
    <Fragment>
      <WeekNav />
      <main className="background">
        <Stats />
        <TaskSection />
        <Docket />
      </main>
    </Fragment>
  );
}
