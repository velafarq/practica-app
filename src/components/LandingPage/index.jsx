import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./style.css";

export default function LandingPage(props) {
  //do something else if logged in

  return (
    <Fragment>
      <section class="info">
        <h1 class="info__title">Practica</h1>
        <button class="info__register">Register now!</button>
      </section>

      <section class="description">
        <div class="description__box">
          <p class="description__box__title">Schedule daily practice tasks</p>
          <img
            src={require("../../assets/images/scheduler-logo.jpg")}
            class="description__box__img"
          />
        </div>
        <div class="description__box">
          <p class="description__box__title">Keep track of goals</p>
          <img
            src={require("../../assets/images/scheduler-logo.jpg")}
            class="description__box__img"
          />
        </div>
        <div class="description__box">
          <p class="description__box__title">Log practice sessions</p>
          <img
            src={require("../../assets/images/scheduler-logo.jpg")}
            class="description__box__img"
          />
        </div>
        <div class="description__box">
          <p class="description__box__title">View practice stats</p>
          <img
            src={require("../../assets/images/scheduler-logo.jpg")}
            class="description__box__img"
          />
        </div>
      </section>

      <div class="block__about">
        <h2 class="block__about__title">ABOUT</h2>
        <p class="block__about__body">
          Practica is a practice helper for professional and amateur musicians.
          With the help of Practica, you can keep track of your schedule and
          goals as a musician. Practica allows you to keep track of your daily
          tasks as you practice. You can log your practice hours, practice
          regularity and save links or insights from your session. Through
          regularly using Practica, you will have a better grasp on your goals
          and achievements as a musician. Practica will also remeber your past
          sessions so that you can compare your results to previous weeks and
          track your progress. and set goals for future weeks.
        </p>
      </div>
      <div class="block__entry">
        <form
          action=""
          class="block__entry__form"
          id="register-new-user"
          role="form"
          method="post"
          role="form"
          aria-live="assertive"
        >
          <h2 class="block__entry__form__title">Register</h2>

          <div class="block__entry__form__input">
            <input
              type="name"
              name="user-name"
              placeholder="first name"
              required
            />
          </div>
          <div class="block__entry__form__input">
            <input
              type="name"
              name="user-name"
              placeholder="last name"
              required
            />
          </div>
          <div class="block__entry__form__input">
            <input
              type="email"
              placeholder="email"
              name="user-email"
              id="user-email"
              required
            />
          </div>
          <div class="block__entry__form__input">
            <input
              type="password"
              placeholder="password"
              name="user-password"
              id="user-password"
              required
            />
          </div>
          <button type="submit" class="block__entry__form__submit">
            Submit
          </button>
        </form>
        <div class="block__entry__alternate">
          <p>
            or
            <a id="alternate"> Login</a>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
