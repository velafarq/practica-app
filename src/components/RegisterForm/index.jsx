import React, { Fragment, Component } from "react";

import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";

export class RegisterForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log("hey");
    const email = this.email.value;
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const password = this.password.value;
    this.email.value = "";
    this.firstName.value = "";
    this.lastName.value = "";
    this.password.value = "";

    console.log(email, firstName, lastName, password);
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
            <h2 class="block__entry__form__title">REGISTER</h2>
            <div class="block__entry__form__input">
              <input
                title="First name"
                type="text"
                name="first-name"
                placeholder="first name"
                component="input"
                required
                ref={firstName => (this.firstName = firstName)}
              />
            </div>
            <div class="block__entry__form__input">
              <input
                title="Last name"
                type="text"
                name="last-name"
                placeholder="last name"
                component="input"
                required
                ref={lastName => (this.lastName = lastName)}
              />
            </div>
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
              <Link to="/login" id="alternate">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect()(RegisterForm);
