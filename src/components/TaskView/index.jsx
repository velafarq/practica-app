import React, { Fragment } from "react";
import { connect } from "react-redux";
import WeekNav from "../WeekNav/index";
import Stats from "../Stats/index";

import { pushTaskNote, getTask } from "../../actions/requests";

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

  componentDidMount() {
    this.props.dispatch(getTask(this.props.match.params.projectId));
  }

  handleNoteSubmit(e, id) {
    e.preventDefault();
    const title = this.title.current.value;
    const note = this.note.current.value;

    const message = "Your post was successfuly submitted!";
    this.setState({ message });

    e.target.reset();
    this.props.dispatch(pushTaskNote(id, title, note));
    this.props.dispatch(getTask(this.props.match.params.projectId));
  }

  renderNotes() {
    if (this.props.currentTask.notes && !this.props.isFetching) {
      return this.props.currentTask.notes.map(note => (
        <li key={note._id} className="project__note">
          <h3 className="project__note__title">{note.title}</h3>
          <div className="project__note__content">{note.body}</div>
          <div className="project__note__date">
            {new Date(note.date).toDateString()}
          </div>
        </li>
      ));
    }
  }
  render() {
    const { message } = this.state;

    // const notes = () => {
    //   if (this.props.currentTask.notes) {
    //     return this.props.currentTask.notes.map(note => (
    //       <li key={note._id} className="project__note">
    //         <h3 className="project__note__title">{note.title}</h3>
    //         <div className="project__note__content">{note.body}</div>
    //         <div className="project__note__date">
    //           {new Date(note.date).toDateString()}
    //         </div>
    //       </li>
    //     ));
    //   }
    // };

    return (
      <Fragment>
        <WeekNav />

        <main>
          <section className="project__container">
            {this.props.isFetching ? (
              <div className="loading-message">
                <i className="fas fa-spinner" />
                <p>Loading...</p>
              </div>
            ) : (
              <h2 className="project__title">{this.props.currentTask.task}</h2>
            )}
            <Stats taskId={this.props.match.params.projectId} />
            <section className="project__notes">
              <div className="project__notes__title__box">
                <h3 className="project__notes__title">project notes</h3>
              </div>
              <ul>{this.renderNotes()}</ul>
            </section>
          </section>
          <section className="project__notepad__container">
            <div className="project__notepad__title__box">
              <h3 className="project__notepad__main-title">ADD NOTE</h3>
            </div>

            <form
              onSubmit={e =>
                this.handleNoteSubmit(e, this.props.match.params.projectId)
              }
              className="project__notepad"
            >
              <input
                name="title"
                type="text"
                id="title"
                ref={this.title}
                className="project__notepad__title"
              />
              <textarea
                className="project__notepad__textarea"
                ref={this.note}
              />
              <button className="project__notepad__submit" type="submit">
                SUBMIT
              </button>
            </form>
            {/* </div> */}

            <p>{message}</p>
          </section>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTask: state.tasks.currentTask,
    isFetching: state.status.isFetching,
    taskList: state.tasks.taskList
  };
};

export default connect(mapStateToProps)(TaskView);
