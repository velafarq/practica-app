import React, { Fragment } from "react";
import { connect } from "react-redux";
import PracticeDuration from "../PracticeDuration";

import "./style.css";

class Stats extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <section className="stats">
            <div className="stats__title__box">
              <h2 className="stats__title">Time Log</h2>
            </div>
            <div>
              <div className="stats__log">
                <p className="day__stat">
                  <span className="day__stat__num">
                    {this.props.practiceDuration}{" "}
                  </span>
                  practice hours logged
                </p>
                <button className="stat__reset">Reset</button>
              </div>

              <PracticeDuration />
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  practiceDuration: state.practiceDuration
});

export default connect(mapStateToProps)(Stats);
