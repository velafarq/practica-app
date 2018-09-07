import React, { Fragment } from "react";
import { connect } from "react-redux";

import { practiceDuration } from "../../actions/index";
import "./style.css";

class PracticeSection extends React.Component {
  constructor(props) {
    super(props);

    this.practiceTime = React.createRef();
    this.state = {
      submitMessage: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const practiceTime = this.practiceTime.current.value;

    this.props.dispatch(practiceDuration(practiceTime));

    const submitMessage = "Practice status updated!";

    e.target.reset();
    this.setState({ submitMessage });
  }

  render() {
    const { submitMessage } = this.state;
    return (
      <Fragment>
        <section className="practice-section">
          <form onSubmit={e => this.handleSubmit(e)} className="practice__form">
            <label className="practice__status">Add practice hours:</label>

            <input
              step=".01"
              min="0"
              required
              type="number"
              className="practice__time"
              ref={this.practiceTime}
            />

            <button className="practice__submit" type="submt">
              ADD
            </button>
          </form>
          <p className="message">{submitMessage}</p>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  practiceStatus: state.practiceStatus,
  practiceDuration: state.practiceDuration
});

export default connect(mapStateToProps)(PracticeSection);
