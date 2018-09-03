import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./style.css";

class Stats extends React.Component {
  render() {
    const completedTasks = this.props.taskList.filter(
      todo => todo.completed === true
    );
    const length = completedTasks.length;

    return (
      <Fragment>
        <section className="stats">
          <div className="stats__title__box">
            <h2 className="stats__title">Stats</h2>
          </div>
          <div>
            <div>
              <p className="day__stat">
                <span className="day__stat__num">
                  {this.props.practiceDuration}{" "}
                </span>
                practice hours logged
              </p>
            </div>
            <div>
              <p className="day__stat">
                <span className="day__stat__num">
                  {this.props.practiceStatus}{" "}
                </span>
                practice days logged
              </p>
            </div>
            <div>
              <p className="day__stat">
                <span className="day__stat__num">{length} </span>
                tasks completed
              </p>
            </div>
            <div>
              <button>Reset</button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  practiceDuration: state.practiceDuration,
  taskIndex: state.taskIndex,
  practiceStatus: state.practiceStatus,
  taskList: state.taskList
});

export default connect(mapStateToProps)(Stats);
