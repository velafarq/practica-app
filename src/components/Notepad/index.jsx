import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";

export default function Notepad(props) {
  return (
    <Fragment>
      <section class="notepad">
        {/* <h3 class="notepad__title">Notepad</h3> */}
        <textarea placeholder="Your Notepad" />
        <button class="notepad__submit" type="submit">
          Submit notes for the day
        </button>
      </section>
    </Fragment>
  );
}
