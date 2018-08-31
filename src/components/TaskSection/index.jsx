import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./style.css";
import PracticeSection from "../PracticeSection";
import {
  getTasks,
  addTask,
  removeTask,
  completeTask
} from "../../actions/requests";
import * as actionRequest from "../../actions/requests";

class TaskSection extends React.Component {
  constructor(props) {
    super(props);
    this.task = React.createRef();
    this.state = {
      taskList: this.props.taskList
    };
  }

  componentDidMount() {
    this.props.getTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("preProps", prevProps.taskList.length);
    // console.log("this props", this.props.taskList.length);
    // if (prevProps.taskList === this.props.taskList) {}
    // this.props.getTasks();
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = this.task.current.value;
    event.target.reset();

    this.props.addTask(task);
  }
  handleCompleteTask(e, id, status) {
    e.preventDefault();
    let newStatus = !status;

    this.props.completeTask(id, newStatus);
  }

  handleRemove(e, id) {
    e.preventDefault();
    this.props.removeTask(id);
  }
  render() {
    const tasks = this.props.taskList.map(task => (
      <li className="tasks__task" value="hi">
        <div>
          <button
            title="complete"
            className="tasks__task__check"
            onClick={e => this.handleCompleteTask(e, task._id, task.completed)}
          >
            <i class="fas fa-check" />
          </button>
          <label
            className={task.completed ? "tasks__task__title--completed" : ""}
          >
            {task.task}
          </label>
        </div>

        <button
          title="delete"
          className="tasks__task__del"
          onClick={e => this.handleRemove(e, task._id)}
        >
          <i className="fas fa-times" />
        </button>
      </li>
    ));

    return (
      <Fragment>
        <div className="task-section">
          <section className="day">
            <div>
              <div className="day__title__box">
                <h2 className="day__title">Today's tasks</h2>
              </div>
              <form onSubmit={e => this.handleSubmit(e)} className="todo">
                <input
                  type="text"
                  className="todo__item"
                  name="q"
                  placeholder="Add task"
                  autoComplete="off"
                  ref={this.task}
                  required
                />
                <button type="submit" className="todo__add">
                  <i className="fas fa-plus" />
                </button>
              </form>
              {this.props.isFetching ? (
                <div className="loading-message">
                  <i class="fas fa-spinner" />
                  <p>Loading...</p>
                </div>
              ) : (
                <ul className="tasks">{tasks}</ul>
              )}
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  taskList: state.taskList,
  practiceStatus: state.practiceStatus
});

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
  addTask: task => dispatch(addTask(task)),
  removeTask: id => dispatch(removeTask(id)),
  completeTask: (id, status) => dispatch(completeTask(id, status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskSection);
