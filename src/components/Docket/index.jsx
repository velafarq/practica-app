import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";
import { Link, Redirect } from "react-router-dom";

export default function Docket(props) {
  return (
    <Fragment>
      <section className="today">
        <div className="today__block">
          <h2 className="today__title">Today's scheduled tasks:</h2>
          <ul>
            <li>Scales</li>
            <li>lullaby of birdland</li>
          </ul>
          <Link to="/day">View More</Link>
        </div>
      </section>
    </Fragment>
  );
}
