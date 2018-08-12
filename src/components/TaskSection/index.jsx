import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";
import TaskForm from "../TaskForm/index";

export default function TaskSection() {
  return (
    <Fragment>
      <TaskForm />
      <ul className="tasks">
        <li className="tasks__task">
          <input type="checkbox" className="tasks__task__check" />
          <label className="tasks__task__title">Scales</label>
          <button className="tasks__task__del">
            <i className="fas fa-times" />
          </button>
        </li>
      </ul>
      <div className="day__practice">
        <button className="day__practice__smile">
          <i className="far fa-smile" />
        </button>
        <label>I practiced today</label>
      </div>
    </Fragment>
  );
}
