import React, { Fragment } from "react";
import { connect } from "react-redux";

import { practiceStatus, practiceDuration } from "../../actions/index";
import "./style.css";

class PracticeSection extends React.Component {
  constructor(props) {
    super(props);

    this.practiceTime = React.createRef();
    this.state = {
      submitMessage: "",
      practiceMessage: "NO"
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
  handlePracticeToggle(e) {
    e.preventDefault();
    const practiceMessage = "YES";
    this.setState({ practiceMessage });
    this.props.dispatch(practiceStatus());
    console.log(this.props.practiceStatus);
  }

  render() {
    const { submitMessage, practiceMessage } = this.state;
    return (
      <Fragment>
        <div className="practice__box">
          <label className="practice__status">Did you practice today?</label>
          <button
            className={"practice__status__btn"}
            onClick={e => this.handlePracticeToggle(e)}
            title="click to change practice status"
          >
            {practiceMessage}
          </button>
        </div>
        <form onSubmit={e => this.handleSubmit(e)} className="practice__form">
          <div className="practice">
            <div className="practice__title__box">
              <h2 className="practice__title">Practice Status</h2>
            </div>

            <div className="practice__box">
              <label className="practice__status">
                How many hours did you practice for?
              </label>

              <input
                step=".01"
                min="0"
                required
                type="number"
                className="practice__time"
                ref={this.practiceTime}
              />
            </div>
          </div>
          <button className="practice__submit" type="submt">
            SUBMIT
          </button>
        </form>
        <p className="message">{submitMessage}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  practiceStatus: state.practiceStatus,
  practiceDuration: state.practiceDuration
});

export default connect(mapStateToProps)(PracticeSection);
