import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./style.css";

export default function WeekNav(props) {
  return (
    <Fragment>
      <section className="dashboard-header">
        <section className="dashboard-header__navbar">
          <ul className="dashboard-header__navbar__nav">
            <li>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li>
              <a>Monday</a>
            </li>
            <li>
              <a>Tuesday</a>
            </li>
            <li>
              <a>Wednesday</a>
            </li>
            <li>
              <a>Thursday</a>
            </li>
            <li>
              <a>Friday</a>
            </li>
            <li>
              <a>Saturday</a>
            </li>
            <li>
              <a>Sunday</a>
            </li>
            <li>
              <a>Notes</a>
            </li>
          </ul>
        </section>
      </section>
    </Fragment>
  );
}
