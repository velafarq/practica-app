import React, { Fragment } from "react";
import { connect } from "react-redux";

import { updateTaskPractice } from "../../actions/requests";

import "./style.css";

class PracticeDuration extends React.Component {
  constructor(props) {
    super(props);

    this.practiceTime = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();

    const addPracticeTime = parseFloat(this.practiceTime.current.value, 10);

    const previousTaskPracticeTime = parseFloat(
      this.props.currentTask.practiceDuration,
      10
    );
    const updatedTaskPracticeTime = previousTaskPracticeTime + addPracticeTime;

    this.props.updateTaskPractice(
      this.props.currentTask._id,
      updatedTaskPracticeTime
    );

    e.target.reset();
  }

  render() {
    return (
      <Fragment>
        <section className="practice-section">
          <form onSubmit={e => this.handleSubmit(e)} className="practice__form">
            <label className="practice__status">Add time:</label>
            <div className="practice__status__input-submit">
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
            </div>
          </form>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentTask: state.tasks.currentTask,

  isFetching: state.status.isFetching
});

const mapDispatchToProps = dispatch => ({
  updateTaskPractice: (id, time) => dispatch(updateTaskPractice(id, time))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PracticeDuration);
