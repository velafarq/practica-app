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
  render() {
    const { message } = this.state;
    const notes = () => {
      if (this.props.currentTask.notes) {
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
    };

    return (
      <Fragment>
        <WeekNav />

        <main>
          <section className="project__container">
            <section>
              {this.props.isFetching ? (
                <div className="loading-message">
                  <i className="fas fa-spinner" />
                  <p>Loading...</p>
                </div>
              ) : (
                <h2 className="project__title">
                  {this.props.currentTask.task}
                </h2>
              )}
              <Stats />
            </section>

            <section className="project__notes">
              {this.props.currentTask.notes ? (
                <ul>{notes()}</ul>
              ) : (
                <p>nonotes</p>
              )}
            </section>

            <section className="project__notepad__container">
              <h3>Add a new note</h3>
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
                  placeholder="Title"
                  ref={this.title}
                  className="project__notepad__title"
                />
                <textarea
                  className="project__notepad__textarea"
                  placeholder="Notepad"
                  ref={this.note}
                />
                <button className="project__notepad__submit" type="submit">
                  SUBMIT
                </button>
              </form>
              <p>{message}</p>
            </section>
          </section>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTask: state.currentTask
  };
};

export default connect(mapStateToProps)(TaskView);
