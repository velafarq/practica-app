import React, { Fragment } from "react";
import { connect } from "react-redux";
import { completeTask, removeTask } from "../../actions/index";
import "./style.css";
import PracticeSection from "../PracticeSection";
import { getTasks, addTask } from "../../actions/requests";
import * as actionRequest from "../../actions/requests";

class TaskSection extends React.Component {
  constructor(props) {
    super(props);
    this.task = React.createRef();
  }

  componentDidMount() {
    this.props.getTasks();
  }
  componentDidUpdate() {
    this.props.getTasks();
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = this.task.current.value;
    event.target.reset();

    this.props.addTask(task);
  }
  handleCompleteTask(e, id) {
    e.preventDefault();

    this.props.dispatch(completeTask(id));
  }

  handleRemove(e, id) {
    e.preventDefault();
    this.props.dispatch(removeTask(id));
  }
  render() {
    const tasks = this.props.taskList.map(task => (
      <li className="tasks__task" value="hi">
        <div>
          <button
            title="complete"
            className="tasks__task__check"
            onClick={e => this.handleCompleteTask(e, task._id)}
          >
            <i class="fas fa-check" />
          </button>
          <label
            // id={`label ${task.taskId}`}
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

              <ul className="tasks">{tasks}</ul>
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
  addTask: task => dispatch(addTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskSection);
