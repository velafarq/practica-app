import React, { Fragment } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import WeekNav from "../WeekNav/index";

import TaskSection from "../TaskSection/index";
import Notepad from "../Notepad/index";

import "./style.css";

class Dashboard extends React.Component {
  render() {
    if (
      !this.props.isAuthenticated ||
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined
    ) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <WeekNav />
        <main className="background">
          <TaskSection />
          <Notepad />
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("dashbaord state", state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentTask: state.currentTask
  };
};

export default connect(mapStateToProps)(Dashboard);
