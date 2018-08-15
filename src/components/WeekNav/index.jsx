import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";

export default function WeekNav(props) {
  return (
    <Fragment>
      <section class="left-block">
        <section class="left-block__week">
          <h3 class="left-block__week__title">This Week</h3>
          <a>Monday</a>
          <a>Tuesday</a>
          <a>Wednesday</a>
          <a>Thursday</a>
          <a>Friday</a>
          <a>Saturday</a>
          <a>Sunday</a>
        </section>
      </section>
    </Fragment>
  );
}
