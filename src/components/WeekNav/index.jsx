import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function WeekNav(props) {
  return (
    <Fragment>
      <section className="dashboard-header">
        <nav className="dashboard-header__navbar" id="main-menu">
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
              <Link to="/notes">Notes</Link>
            </li>
          </ul>
        </nav>
      </section>
    </Fragment>
  );
}
