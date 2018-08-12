import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import { connect } from "react-redux";

import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "../../validators";
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class RegisterForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form
        // onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        className="block__entry__form"
        id="register-new-user"
        role="form"
        method="post"
        role="form"
        aria-live="assertive"
      >
        <h2 class="block__entry__form__title">Register</h2>
        <div class="block__entry__form__input">
          <Field
            title="First name"
            type="text"
            name="first-name"
            placeholder="first name"
            component="input"
            required
          />
        </div>
        <div class="block__entry__form__input">
          <Field
            title="Last name"
            type="text"
            name="last-name"
            placeholder="last name"
            component="input"
            required
          />
        </div>
        <div class="block__entry__form__input">
          <Field
            title="email"
            type="email"
            placeholder="email"
            name="user-email"
            id="user-email"
            component="input"
            required
          />
        </div>
        <div class="block__entry__form__input">
          <Field
            title="Password"
            type="password"
            placeholder="password"
            name="password"
            id="user-password"
            component="input"
            required
          />
        </div>
        <button type="submit" class="block__entry__form__submit">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm()(RegisterForm);
