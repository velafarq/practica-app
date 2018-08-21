import React, { Fragment } from "react";

import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      errors: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const firstName = this.firstName.current.value;
    const lastName = this.lastName.current.value;
    const email = this.email.current.value;
    const password = this.password.current.value;
    e.target.reset();
    const errors = this.handleValidation(password);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  }

  handleValidation(password) {
    const errors = [];

    if (password.length < 10) {
      errors.push("Password should be at least 8 characters long");
    }
    if (password.length > 70) {
      errors.push("Password should not be over 70 characters long");
    }
    return errors;
  }
  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <div className="block__entry">
          <h2 class="block__entry__form__title">REGISTER</h2>
          <form
            onSubmit={e => this.handleSubmit(e)}
            className="block__entry__form"
            id="register-new-user"
            role="form"
            method="post"
            role="form"
            aria-live="assertive"
          >
            {errors.map(error => (
              <p key={error}>{error} </p>
            ))}
            <div class="block__entry__form__input">
              <input
                title="First name"
                type="text"
                name="first-name"
                placeholder="first name"
                component="input"
                required
                ref={this.firstName}
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
                ref={this.lastName}
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
                ref={this.email}
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
                ref={this.password}
              />
            </div>
            <button type="submit" class="block__entry__form__submit">
              Submit
            </button>
          </form>
          <div className="block__entry__alternate">
            <p>
              <Link to="/login" id="alternate">
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
