import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/index";
import "./style.css";

export class TaskForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    this.props.dispatch(addTask({ todo: value }));
    this.input.value = "";
    this.input.focus();
    console.log(this.props.tasks);
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={e => this.onSubmit(e)} className="todo">
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
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TaskForm);
