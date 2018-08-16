import React, { Fragment } from "react";
import { connect } from "react-redux";
import { completeTask, removeTask, addTask } from "../../actions/index";
import "./style.css";
import TaskForm from "../TaskForm/index";

export class TaskSection extends React.Component {
  handleFormSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    this.props.dispatch(addTask({ todo: value }));
    this.input.value = "";
    this.input.focus();
    // console.log(this.props.taskList);
  }
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

  taskList(todo, index) {
    return (
      <li className="tasks__task" key={index}>
        <button
          title="complete"
          id={todo.taskId}
          className="tasks__task__check"
          onClick={() => this.handleCompleteTask(todo.taskId)}
        >
          <i class="fas fa-check" />
        </button>
        <label id={`label ${todo.taskId}`} className="tasks__task__title">
          {todo.todo}
        </label>
        <button
          title="delete"
          className="tasks__task__del"
          onClick={e => this.handleRemove(e, index)}
        >
          <i className="fas fa-times" />
        </button>
      </li>
    );
  }
  handleRemove(e, id) {
    e.preventDefault();
    this.props.dispatch(removeTask(id));
  }

  render() {
    const tasks = this.props.taskList.map(task => (
      <li className="tasks__task" key={task.taskId}>
        <button
          title="complete"
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
        <form onSubmit={e => this.handleFormSubmit(e)} className="todo">
          <input
            type="text"
            className="todo__item"
            name="q"
            placeholder="Add task"
            autoComplete="off"
            ref={input => (this.input = input)}
            required
          />
          <button type="submit" className="todo__add">
            <i className="fas fa-plus" />
          </button>
        </form>
        {
          <ul className="tasks">
            {this.props.taskList.map((todo, i) => this.taskList(todo, i))}
          </ul>
        }
        {/* <ul className="tasks">{tasks}</ul> */}
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
  taskList: state.taskList
});

export default connect(mapStateToProps)(TaskSection);

{
  /* <input
          type="checkbox"
          className="tasks__task__check"
          onClick={() => this.props.dispatch(completeTask(task.taskId))}
        /> */
}
