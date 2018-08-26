import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.css";

import WeekNav from "../WeekNav/index";

import "./style.css";

class NotesView extends React.Component {
  render() {
    console.log(this.props.notes);
    const notes = this.props.notes.map(note => <li>{note.content}</li>);

    return (
      <Fragment>
        <WeekNav />
        <main className="background">
          <ul className="notes">{notes}</ul>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NotesView);
