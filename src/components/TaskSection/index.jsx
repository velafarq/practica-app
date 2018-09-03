import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./style.css";
import {
  getTasks,
  addTask,
  removeTask,
  completeTask
} from "../../actions/requests";

class TaskSection extends React.Component {
  constructor(props) {
    super(props);
    this.task = React.createRef();
  }

  componentDidMount() {
    this.props.getTasks();
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = this.task.current.value;
    event.target.reset();

    this.props.addTask(JSON.stringify({ task }));
  }
  handleCompleteTask(e, id, status) {
    e.preventDefault();

    this.props.completeTask(id, !status);
  }

  handleRemove(e, id) {
    e.preventDefault();
    this.props.removeTask(id);
  }
  render() {
    const tasks = this.props.taskList.map(task => (
      <li className="tasks__task" key={task._id}>
        <div>
          <button
            title="complete"
            className="tasks__task__check"
            onClick={e => this.handleCompleteTask(e, task._id, task.completed)}
          >
            <i className="fas fa-check" />
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
                  <i className="fas fa-spinner" />
                  <p>Loading...</p>
                </div>
              ) : this.props.taskList.length > 0 ? (
                <ul className="tasks">{tasks}</ul>
              ) : (
                <p>You don't have any tasks scheduled yet.</p>
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
  practiceStatus: state.practiceStatus,
  isFetching: state.isFetching,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
  addTask: task => dispatch(addTask(task)),
  removeTask: id => dispatch(removeTask(id)),
  completeTask: (id, completed) => dispatch(completeTask(id, completed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskSection);
