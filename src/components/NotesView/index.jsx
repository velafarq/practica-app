import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";
import { getNotes } from "../../actions/requests";

import WeekNav from "../WeekNav/index";

import "./style.css";

class NotesView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
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
  notes: state.notes,
  isFetching: state.isFetching,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesView);
