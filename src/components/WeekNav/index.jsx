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
              <Link to="/dashboard">HOME</Link>
            </li>

            <li>
              <Link to="/archive">Project Archive</Link>
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
