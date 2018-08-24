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
              <Link to="/day">Monday</Link>
            </li>
            <li>
              <Link to="/day">Tuesday</Link>
            </li>
            <li>
              <Link to="/day">Wednesday</Link>
            </li>
            <li>
              <Link to="/day">Thursday</Link>
            </li>
            <li>
              <Link to="/day">Friday</Link>
            </li>
            <li>
              <Link to="/day">Saturday</Link>
            </li>
            <li>
              <Link to="/day">Sunday</Link>
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
