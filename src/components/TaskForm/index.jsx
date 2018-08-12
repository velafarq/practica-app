import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";

export default function TaskForm() {
  return (
    <Fragment>
      <form className="todo">
        <input
          type="text"
          className="todo__item"
          name="q"
          placeholder="Add task"
          autocomplete="off"
        />
        <button type="submit" className="todo__add">
          <i className="fas fa-plus" />
        </button>
      </form>
    </Fragment>
  );
}
