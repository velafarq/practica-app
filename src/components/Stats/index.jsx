import React, { Fragment } from "react";
import { connect } from "react-redux";
import PracticeDuration from "../PracticeDuration";
import { resetTaskPractice } from "../../actions/requests";

import "./style.css";

class Stats extends React.Component {
  handlePracticeReset(e, id) {
    e.preventDefault();
    this.props.dispatch(resetTaskPractice(id, 0));
  }
  render() {
    return (
      <Fragment>
        <section className="stats">
          <div className="stats__title__box">
            <h2 className="stats__title">Project Practice Log</h2>
          </div>
          <div>
            <div className="stats__log">
              <p className="day__stat">
                <span className="day__stat__num">
                  {this.props.currentTask.practiceDuration}
                  {"   "}
                </span>
                hours
              </p>
              <button
                onClick={e =>
                  this.handlePracticeReset(e, this.props.currentTask._id)
                }
                className="stat__reset"
              >
                Reset
              </button>
            </div>

            <PracticeDuration />
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentTask: state.tasks.currentTask,
    isFetching: state.status.isFetching
  };
};

export default connect(mapStateToProps)(Stats);
