import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addNote } from "../../actions/index";
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
    this.props.dispatch(addNote(note));
  }
  render() {
    const { message } = this.state;
    return (
      <Fragment>
        <section className="notepad__container">
          <form onSubmit={e => this.handleSubmit(e)} class="notepad">
            <textarea placeholder="Your Notepad" ref={this.note} />
            <button class="notepad__submit" type="submit">
              SUBMIT
            </button>
          </form>
          <p>{message}</p>
        </section>
      </Fragment>
    );
  }
}

export default connect()(Notepad);
