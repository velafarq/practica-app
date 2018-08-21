import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";

export default function WeekNav(props) {
  return (
    <Fragment>
      <section class="left-block">
        <section class="left-block__week">
          <a>Monday</a>
          <a>Tuesday</a>
          <a>Wednesday</a>
          <a>Thursday</a>
          <a>Friday</a>
          <a>Saturday</a>
          <a>Sunday</a>
          <a>Notes</a>
        </section>
      </section>
    </Fragment>
  );
}
