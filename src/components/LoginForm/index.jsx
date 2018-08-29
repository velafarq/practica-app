import React, { Fragment, Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import * as actionRequest from "../../actions/users";
import "../RegisterForm/style.css";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.email = React.createRef();
    this.password = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault();

    const email = this.email.current.value;
    const password = this.password.current.value;
    e.target.reset();
    this.props.dispatch(actionRequest.login(email, password));
  }

  render() {
    return (
      <Fragment>
        <div className="block__entry">
          <h2 class="block__entry__form__title">LOGIN</h2>
          <form
            onSubmit={e => this.handleSubmit(e)}
            className="block__entry__form"
            id="register-new-user"
            role="form"
            method="post"
            role="form"
            aria-live="assertive"
          >
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
              <Link to="/register" id="alternate">
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
