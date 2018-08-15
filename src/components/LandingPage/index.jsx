import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import RegisterForm from "../RegisterForm/index";

export default function LandingPage(props) {
  //do something else if logged in

  return (
    <Fragment>
      <section className="info">
        <h1 className="info__title">Practica</h1>
        <button className="info__register">Register now!</button>
      </section>

      <section className="about">
        <h2 className="about__title">ABOUT</h2>
        <p className="about__body">
          Practica is a practice scheduler dedicated to helping musicians keep
          track of their practice sessions, notes, and goals. Whether music is
          your full-time occupation, or your after-work hobby, Practica will be
          there to help guide you along.
        </p>

        <section className="description">
          <div className="description__box">
            <i className="fas fa-sun" />
            <p className="description__box__title">Schedule daily tasks</p>
            <p>
              Keep track of your daily practice tasks and plan them for the
              future. Log your practice hours, practice regularity and insights
              from your sessions.
            </p>
          </div>
          <div className="description__box">
            <i class="fas fa-clipboard-list" />
            <p className="description__box__title">View weekly stats</p>
            <p>
              Every week, Practica logs your practice days, hours, tasks
              completed and goals achieved. Practica will also remeber your past
              sessions so that you can compare your results to previous weeks
              and track your progress.
            </p>
          </div>

          <div className="description__box">
            <i class="fas fa-trophy" />
            <p className="description__box__title">Keep track of your goals</p>
            <p>
              Add long-term or short-term goals as you work and mark them off
              when you have achieved them. Through the regular use of Practica,
              you will have a better grasp on your goals and achievements as a
              musician.
            </p>
          </div>
        </section>
      </section>
      <div className="block__entry">
        <RegisterForm />
        <div className="block__entry__alternate">
          <p>
            or
            <a id="alternate"> Login</a>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
