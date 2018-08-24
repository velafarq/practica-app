import React, { Fragment } from "react";
import { connect } from "react-redux";
import { completeTask, removeTask, addTask } from "../../actions/index";
import "./style.css";
import PracticeSection from "../PracticeSection";

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
        <div className="task-section">
          <PracticeSection />
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
                  ref={this.todo}
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

export default connect(mapStateToProps)(TaskSection);
