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
    const content = () => {
      if (this.props.isFetching) {
        return <p>is fetching!</p>;
      } else if (this.props.error) {
        return <p>There was an error loading your notes.</p>;
      } else {
        return this.props.notes.map((note, index) => (
          <li key={index}>{note.content}</li>
        ));
      }
    };
    const notes = this.props.notes.map((note, index) => (
      <li key={index}>{note.content}</li>
    ));

    return (
      <Fragment>
        <WeekNav />
        <main className="background">
          {this.props.isFetching ? (
            <div className="loading-message">
              <i class="fas fa-spinner" />
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