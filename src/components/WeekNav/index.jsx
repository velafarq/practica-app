import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function WeekNav(props) {
  return (
    <Fragment>
      <section className="dashboard-header">
        {/* <a
          href="#main-menu"
          class="menu-toggle"
          role="button"
          id="main-menu-toggle"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Open main menu"
        >
          <span class="fas fa-bars" />
        </a> */}
        <nav className="dashboard-header__navbar" id="main-menu">
          {/* <a href="#main-menu-toggle" class="menu-close">
            <span class="fa fa-close" aria-hidden="true" />
          </a> */}
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
        {/* <a
          href="#main-menu-toggle"
          class="backdrop"
          tabIndex="-1"
          aria-hidden="true"
          hidden
        /> */}
      </section>
    </Fragment>
  );
}
