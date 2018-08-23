import React, { Fragment } from "react";
import { connect } from "react-redux";

import { practiceStatus } from "../../actions/index";
import "./style.css";

class PracticeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  changePracticeStatus(e) {
    e.preventDefault();
    if (this.props.practiceStatus === false) {
      this.props.dispatch(practiceStatus(true));
    } else {
      this.props.dispatch(practiceStatus(false));
    }
  }
  render() {
    return (
      <Fragment>
        <div className="practice">
          <div className="practice__title__box">
            <h2 className="practice__title">Practice Status</h2>
          </div>
          <form className="practice__form">
            <div className="practice__box">
              <label className="practice__status">
                Did you practice today?
              </label>
              <input
                id="practice-toggle"
                title="click to change practice status"
                type="checkbox"
                onClick={e => this.changePracticeStatus(e)}
              />
            </div>
            <div className="practice__box">
              <label className="practice__status">
                How many hours did you practice for?
              </label>

              <input
                step=".01"
                min="0"
                type="number"
                className="practice__time"
              />
            </div>
          </form>
        </div>
        <button className="practice__submit" type="submt">
          SUBMIT
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  practiceStatus: state.practiceStatus
});

export default connect(mapStateToProps)(PracticeSection);
