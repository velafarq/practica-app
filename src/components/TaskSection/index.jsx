import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  completeTask,
  removeTask,
  addTask,
  practiceStatus
} from "../../actions/index";
import "./style.css";

class TaskSection extends React.Component {
  constructor(props) {
    super(props);
    this.todo = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    const todo = this.todo.current.value;
    event.target.reset();

    this.props.dispatch(addTask({ todo: todo }));
  }
  handleCompleteTask(e, id) {
    e.preventDefault();

    this.props.dispatch(completeTask(id));
  }

  changePracticeStatus(e) {
    e.preventDefault();
    if (this.props.practiceStatus === false) {
      this.props.dispatch(practiceStatus(true));
    } else {
      this.props.dispatch(practiceStatus(false));
    }
    console.log(this.props.practiceStatus);
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

  handleRemove(e, id) {
    e.preventDefault();
    this.props.dispatch(removeTask(id));
  }
  render() {
    const tasks = this.props.taskList.map(task => (
      <li className="tasks__task" key={task.taskId} value={task.taskId}>
        <button
          title="complete"
          className="tasks__task__check"
          onClick={e => this.handleCompleteTask(e, task.taskId)}
        >
          <i class="fas fa-check" />
        </button>

        <label
          id={`label ${task.taskId}`}
          className={task.completed ? "tasks__task__title--completed" : ""}
        >
          {task.todo}
        </label>
        <button
          title="delete"
          className="tasks__task__del"
          onClick={e => this.handleRemove(e, task.taskId)}
        >
          <i className="fas fa-times" />
        </button>
      </li>
    ));

    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)} className="todo">
          <input
            type="text"
            className="todo__item"
            name="q"
            placeholder="Add task"
            autoComplete="off"
            ref={this.todo}
            required
          />
          <button type="submit" className="todo__add">
            <i className="fas fa-plus" />
          </button>
        </form>

        <ul className="tasks">{tasks}</ul>
        <div className="day__practice">
          <button
            id="practice-toggle"
            title="click to change practice status"
            className="day__practice__smile"
            onClick={e => this.changePracticeStatus(e)}
          >
            Did you practice today?
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  taskList: state.taskList,
  practiceStatus: state.practiceStatus
});

export default connect(mapStateToProps)(TaskSection);

// "tasks__task__title"
