import React, { Fragment } from "react";
import { connect } from "react-redux";

import * as actionRequest from "../../actions/requests";
import "./style.css";

class Notepad extends React.Component {
  constructor(props) {
    super(props);
    this.note = React.createRef();
    this.state = {
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = this.note.current.value;

    const message = "Your post was successfuly submitted!";
    this.setState({ message });

    e.target.reset();
    this.props.dispatch(actionRequest.addNote(note));
  }
  render() {
    const { message } = this.state;
    return (
      <Fragment>
        <section className="notepad__container">
          <div className="notepad__div">
            <form onSubmit={e => this.handleSubmit(e)} className="notepad">
              <textarea
                className="notepad__textarea"
                placeholder="Your Notepad"
                ref={this.note}
              />
              <button className="notepad__submit" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
          <p>{message}</p>
        </section>
      </Fragment>
    );
  }
}

export default connect()(Notepad);
