import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import WeekNav from "../WeekNav/index";
import Notepad from "../Notepad/index";
import TaskSection from "../TaskSection/index";
import "./style.css";

export default function DayView(props) {
  return (
    <Fragment>
      <WeekNav />
      <main>
        <TaskSection />
        <Notepad />
      </main>
    </Fragment>
  );
}
