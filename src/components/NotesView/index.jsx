import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./style.css";
import { getNotes } from "../../actions/requests";

import WeekNav from "../WeekNav/index";

import "./style.css";

class NotesView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    const notes = this.props.notes.map((note, index) => (
      <li key={index} className="note">
        <div className="note__content">{note.content}</div>
        <div className="note__date">{note.date}</div>
      </li>
    ));

    return (
      <Fragment>
        <WeekNav />
        <main className="background">
          {this.props.isFetching ? (
            <div className="loading-message">
              <i className="fas fa-spinner" />
              <p>Loading...</p>
            </div>
          ) : (
            <ul className="notes">{notes}</ul>
          )}
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
  getNotes: () => dispatch(getNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesView);
