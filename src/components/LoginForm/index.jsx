import React, { Fragment, Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "../RegisterForm/style.css";

export class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log("ho");
    const email = this.email.value;

    const password = this.password.value;
    this.email.value = "";

    this.password.value = "";

    console.log(email, password);
  }
  render() {
    return (
      <Fragment>
        <div className="block__entry">
          <form
            onSubmit={e => this.handleSubmit(e)}
            className="block__entry__form"
            id="register-new-user"
            role="form"
            method="post"
            role="form"
            aria-live="assertive"
          >
            <h2 class="block__entry__form__title">LOGIN</h2>

            <div class="block__entry__form__input">
              <input
                title="email"
                type="email"
                placeholder="email"
                name="user-email"
                id="user-email"
                component="input"
                required
                ref={email => (this.email = email)}
              />
            </div>
            <div class="block__entry__form__input">
              <input
                title="Password"
                type="password"
                placeholder="password"
                name="password"
                id="user-password"
                component="input"
                required
                ref={password => (this.password = password)}
              />
            </div>
            <button type="submit" class="block__entry__form__submit">
              Submit
            </button>
          </form>
          <div className="block__entry__alternate">
            <p>
              or
              <Link to="/register" id="alternate">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect()(LoginForm);
