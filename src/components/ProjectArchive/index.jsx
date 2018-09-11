import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import WeekNav from "../WeekNav/index";
import { getTasks } from "../../actions/requests";

import "./style.css";

class ProjectArchive extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    const taskList = this.props.taskList.map(task => (
      <li key={task._id} className="project-archive__main">
        <div className="project-archive__flex-child-start">
          <Link to={`/dashboard/${task._id}`}>
            <h3 className="project-archive__title">{task.task}</h3>
          </Link>
        </div>

        <div className="project-archive__flex-child-end">
          {task.status ? (
            <p>Inactive</p>
          ) : (
            <p className="text-active"> Active</p>
          )}
          <p>
            {task.notes.length}{" "}
            {task.notes.length === 1 ? <span>note</span> : <span>notes</span>}{" "}
          </p>
          <p>{task.date}</p>
          <p>
            {task.practiceDuration}{" "}
            {task.practiceDuration === 1 ? <span>hr</span> : <span>hrs</span>}{" "}
          </p>
        </div>
      </li>
    ));

    return (
      <Fragment>
        <WeekNav />

        <main>
          {this.props.isFetching ? (
            <div className="loading-message">
              <i className="fas fa-spinner" />
              <p>Loading...</p>
            </div>
          ) : this.props.taskList.length > 0 ? (
            <ul className="project-archive">{taskList}</ul>
          ) : (
            <p>You don't have any projects.</p>
          )}
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.status.isFetching,
    error: state.status.error,
    taskList: state.tasks.taskList
  };
};

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectArchive);
