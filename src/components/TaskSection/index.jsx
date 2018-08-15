import React, { Fragment } from "react";
import { connect } from "react-redux";
import { completeTask, removeTask } from "../../actions/index";
import "./style.css";
import TaskForm from "../TaskForm/index";

export class TaskSection extends React.Component {
  handleCompleteTask(id) {
    document
      .getElementById(id)
      .classList.toggle("tasks__task__check--completed");

    document
      .getElementById(`label ${id}`)
      .classList.toggle("tasks__task__title--completed");

    this.props.dispatch(completeTask(id));
  }

  changePracticeStatus() {
    document
      .querySelector(".day__practice__smile")
      .classList.toggle("day__practice__smile--true");

    const practiceToggle = document.getElementById("practice-toggle");
    if (practiceToggle.innerHTML === "Did you practice today?") {
      practiceToggle.innerHTML = "I practiced today!";
    } else {
      practiceToggle.innerHTML = "Did you practice today?";
    }
  }

  render() {
    const tasks = this.props.tasks.taskList.map(task => (
      <li className="tasks__task" key={task.taskId}>
        <button
          id={task.taskId}
          className="tasks__task__check"
          onClick={() => this.handleCompleteTask(task.taskId)}
        >
          <i class="fas fa-check" />
        </button>
        <label id={`label ${task.taskId}`} className="tasks__task__title">
          {task.todo}
        </label>
        <button
          className="tasks__task__del"
          onClick={() => this.props.dispatch(removeTask(task.taskId))}
        >
          <i className="fas fa-times" />
        </button>
      </li>
    ));

    return (
      <Fragment>
        <TaskForm />
        <ul className="tasks">{tasks}</ul>
        <div className="day__practice">
          <button
            id="practice-toggle"
            title="click to change practice status"
            className="day__practice__smile"
            onClick={() => this.changePracticeStatus()}
          >
            Did you practice today?
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TaskSection);

{
  /* <input
          type="checkbox"
          className="tasks__task__check"
          onClick={() => this.props.dispatch(completeTask(task.taskId))}
        /> */
}
