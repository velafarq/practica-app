import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./style.css";

class LandingPage extends React.Component {
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Fragment>
        <section className="info">
          <h1 className="info__title">Practica</h1>
          <Link to="/register" className="info__register">
            SIGN UP
          </Link>
        </section>
        <section className="about">
          <h2 className="about__title">ABOUT</h2>
          <p className="about__body">
            Practica is a practice scheduler dedicated to helping musicians keep
            track of their current projects, practice sessions and notes.
            Whether music is your full-time occupation, or your after-work
            hobby, Practica will be there to help guide you along.
          </p>

          <section className="description">
            <div className="description__box">
              <i className="fas fa-sun" />
              <p className="description__box__title">Create new projects</p>
              <p>
                Keep track of your practice goals by creating new projects. Log
                your practice hours and insights from your sessions.
              </p>
            </div>
            <div className="description__box">
              <i className="fas fa-trophy" />
              <p className="description__box__title">
                View your practice stats
              </p>
              <p>
                With Practica, you can log your practice hours for each project
                and reset them when you've achieved your desired practice goal.
                Practica will remeber your past projects so that you can compare
                your results to current projects and track your progress.
              </p>
            </div>

            <div className="description__box">
              <i className="fas fa-clipboard-list" />
              <p className="description__box__title">
                Keep track of your notes
              </p>
              <p>
                Practica is like your own personal music journal. Create general
                notes or notes related to specific projects and access them any
                time.
              </p>
            </div>
          </section>
          <section>
            <Link to="/register" className="info__register">
              SIGN UP
            </Link>
          </section>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(LandingPage);
