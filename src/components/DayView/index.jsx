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
      <main>
        <WeekNav />

        <section className="day">
          <div>
            <h2 className="day__title">Today's tasks:</h2>
            <div className="day__nav">
              <i className="fas fa-backward day__nav__back" />
              <h3 className="day__nav__date">Tuesday, August 7th 2018</h3>
              <i className="fas fa-forward day__nav__fward" />
            </div>
            <TaskSection />
          </div>
        </section>

        <Notepad />
      </main>
    </Fragment>
  );
}
