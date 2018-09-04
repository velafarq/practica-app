import React, { Fragment } from "react";
import { connect } from "react-redux";

import { increasePractice, practiceDuration } from "../../actions/index";
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
  addPracticeDay(e) {
    e.preventDefault();

    this.props.dispatch(increasePractice());
  }

  render() {
    const { submitMessage } = this.state;
    return (
      <Fragment>
        <section className="practice-section">
          <div className="practice__box">
            <label className="practice__status">Add/remove practice day</label>
            <button
              className={"practice__status__btn"}
              onClick={e => this.addPracticeDay(e)}
              title="click to add practice day"
            >
              <i className="fas fa-arrow-up" />
            </button>
            <button
              className="practice__status__btn"
              title="click to remove practice day"
            >
              <i className="fas fa-arrow-down" />
            </button>
          </div>
          <form onSubmit={e => this.handleSubmit(e)} className="practice__form">
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
