import React, { Fragment } from "react";
import { connect } from "react-redux";
import { completeTask } from "../../actions/index";
import "./style.css";
import TaskForm from "../TaskForm/index";

export class TaskSection extends React.Component {
  render() {
    const tasks = this.props.tasks.taskList.map(task => (
      <li
        className="tasks__task"
        key={task.taskId}
        onClick={() => this.props.dispatch(completeTask(task.taskId))}
      >
        <input type="checkbox" className="tasks__task__check" />
        <label className="tasks__task__title">{task.todo}</label>
        <button className="tasks__task__del">
          <i className="fas fa-times" />
        </button>
      </li>
    ));

    return (
      <Fragment>
        <TaskForm />
        <ul className="tasks">{tasks}</ul>
        <div className="day__practice">
          <button className="day__practice__smile">
            <i className="far fa-smile" />
          </button>
          <label>I practiced today</label>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TaskSection);
