import React, { Fragment } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import WeekNav from "../WeekNav/index";

import TaskSection from "../TaskSection/index";
import Stats from "../Stats/index";

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
          <Stats />
          <TaskSection />
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

export default connect(mapStateToProps)(Dashboard);
