import React, { Fragment } from "react";
import { connect } from "react-redux";
import WeekNav from "../WeekNav/index";

import { pushTaskNote } from "../../actions/requests";

import "./style.css";

class TaskView extends React.Component {
  constructor(props) {
    super(props);
    this.note = React.createRef();
    this.title = React.createRef();
    this.state = {
      message: ""
    };
  }

  handleNoteSubmit(e, id) {
    e.preventDefault();
    const title = this.title.current.value;
    const note = this.note.current.value;

    const message = "Your post was successfuly submitted!";
    this.setState({ message });

    e.target.reset();
    this.props.dispatch(pushTaskNote(id, title, note));
  }
  render() {
    const { message } = this.state;
    console.log("currentTask in render", this.props.currentTask);

    //   const notes = this.props.currenTask.notes.map(note => (
    //     <li key={note._id}>
    //       <h3>{note.title}</h3>
    //       <p>{note.body}</p>
    //       <p>{note.date}</p>
    //     </li>
    //   ));

    return (
      <Fragment>
        <WeekNav />
        <main>
          {this.props.isFetching ? (
            <div className="loading-message">
              <i className="fas fa-spinner" />
              <p>Loading...</p>
            </div>
          ) : (
            <p>test</p>
            // <p>{this.props.currentTask.task}</p>
          )}

          <section className="notepad__container">
            <ul>notes go here</ul>

            <form
              onSubmit={e => this.handleNoteSubmit(e, this.props.id)}
              className="notepad"
            >
              <input
                name="title"
                type="text"
                id="title"
                placeholder="Your Title"
                ref={this.title}
              />
              <textarea placeholder="Your Notepad" ref={this.note} />
              <button className="notepad__submit" type="submit">
                SUBMIT
              </button>
            </form>
            <p>{message}</p>
          </section>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.projectId;
  const currentTask = state.taskList.filter(
    task =>
      parseInt(task._id, 10) === parseInt(props.match.params.projectId, 10)
  )[0];

  console.log("currentTask", currentTask);

  return {
    id,
    currentTask
  };
};

export default connect(mapStateToProps)(TaskView);
