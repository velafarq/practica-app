import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./style.css";
import {
  getTasks,
  getTask,
  addTask,
  removeTask,
  toggleTaskStatus
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
  handleStatusChange(e, id, status) {
    e.preventDefault();

    this.props.toggleTaskStatus(id, !status);
  }

  handleRemove(e, id) {
    e.preventDefault();
    this.props.removeTask(id);
  }
  render() {
    const activeTaskFilter = this.props.taskList.filter(
      task => task.status === false
    );

    const inactiveTaskFilter = this.props.taskList.filter(
      task => task.status === true
    );
    const inactiveTasks = inactiveTaskFilter.map(task => (
      <li className="tasks__task" key={task._id}>
        <div>
          <button
            title="activate"
            className="tasks__task__check"
            onClick={e => this.handleStatusChange(e, task._id, task.status)}
          >
            <i className="far fa-circle" />
          </button>
          <label className="tasks__task__title--completed">{task.task}</label>
        </div>

        <div>
          <button className="tasks__task__expand">expand</button>
          <button
            title="delete"
            className="tasks__task__del"
            onClick={e => this.handleRemove(e, task._id)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </li>
    ));

    const activeTasks = activeTaskFilter.map(task => (
      <li className="tasks__task" key={task._id}>
        <div>
          <button
            title="deactivate"
            className="tasks__task__check"
            onClick={e => this.handleStatusChange(e, task._id, task.status)}
          >
            <i className="fas fa-circle  active-project" />
          </button>
          <label>{task.task}</label>
        </div>

        <div>
          <Link to={`/dashboard/${task._id}`}>
            <button className="tasks__task__expand">expand</button>
          </Link>
          <button
            title="delete"
            className="tasks__task__del"
            onClick={e => this.handleRemove(e, task._id)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </li>
    ));

    return (
      <Fragment>
        <div className="task-section">
          <section className="day">
            <div>
              <div className="day__title__box">
                <h2 className="day__title">Active projects</h2>
              </div>
              <form onSubmit={e => this.handleSubmit(e)} className="todo">
                <input
                  type="text"
                  className="todo__item"
                  name="q"
                  placeholder="Add a new project"
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
              ) : activeTasks.length > 0 ? (
                <ul className="tasks">{activeTasks}</ul>
              ) : (
                <p>You haven't added any projects yet.</p>
              )}

              <div>
                <div className="day__title__box">
                  <h2 className="day__title">Inactive projects</h2>
                </div>
                {this.props.isFetching ? (
                  <div className="loading-message">
                    <i className="fas fa-spinner" />
                    <p>Loading...</p>
                  </div>
                ) : inactiveTasks.length > 0 ? (
                  <ul className="tasks">{inactiveTasks}</ul>
                ) : (
                  <p>You don't have any inactive projects.</p>
                )}
              </div>
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
  getTask: id => dispatch(getTask(id)),
  getTasks: () => dispatch(getTasks()),
  addTask: task => dispatch(addTask(task)),
  removeTask: id => dispatch(removeTask(id)),
  toggleTaskStatus: (id, status) => dispatch(toggleTaskStatus(id, status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskSection);
