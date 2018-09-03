import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import WeekNav from "../WeekNav/index";
import Notepad from "../Notepad/index";
import TaskSection from "../TaskSection/index";
import "./style.css";

class DayView extends React.Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <Fragment>
        <WeekNav />
        <main>
          <TaskSection />
          <Notepad />
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(DayView);
