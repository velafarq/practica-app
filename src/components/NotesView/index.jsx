import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./style.css";
import { getNotes, removeNote } from "../../actions/requests";

import WeekNav from "../WeekNav/index";

import "./style.css";

class NotesView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  handleRemove(e, id) {
    e.preventDefault();
    this.props.removeNote(id);
  }
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    const notes = this.props.notes.map((note, index) => (
      <li key={index} className="note">
        <div className="note__content">{note.content}</div>
        <div className="note__date">
          {note.date}

          <button
            title="delete"
            className="tasks__task__del"
            onClick={e => this.handleRemove(e, note._id)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </li>
    ));

    return (
      <Fragment>
        <WeekNav />

        <main className="background">
          <div>
            <div className="day__title__box general-notes">
              <h2 className="day__title general-notes__title">General Notes</h2>
            </div>
            {this.props.isFetching ? (
              <div className="loading-message">
                <i className="fas fa-spinner" />
                <p>Loading...</p>
              </div>
            ) : this.props.notes.length > 0 ? (
              <ul className="notes">{notes}</ul>
            ) : (
              <p>You haven't added any notes yet.</p>
            )}
          </div>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes.notes,
  isFetching: state.status.isFetching,
  error: state.status.error,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes()),
  removeNote: id => dispatch(removeNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesView);
