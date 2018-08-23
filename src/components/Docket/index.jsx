import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";
import { Link, Redirect } from "react-router-dom";

export default function Docket(props) {
  return (
    <Fragment>
      <section className="tmr">
        <div className="tmr__title__box">
          <h2 className="tmr__title">Tomorrow's tasks</h2>
        </div>
        <ul className="tmr__title__box__list">
          <li>Scales</li>
          <li>lullaby of birdland</li>
          <li>lullaby of birdland</li>
          <li>Scales</li>
        </ul>
        <Link className="tmr__add" to="/day">
          Add more
        </Link>
      </section>
    </Fragment>
  );
}
