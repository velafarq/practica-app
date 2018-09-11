import React, { Fragment } from "react";

import { connect } from "react-redux";

import { Link, Redirect } from "react-router-dom";
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
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    const { errorMessage } = this.props;
    return (
      <Fragment>
        <div className="block__entry">
          <h2 className="block__entry__form__title">LOGIN</h2>
          <form
            onSubmit={e => this.handleSubmit(e)}
            className="block__entry__form"
            id="register-new-user"
            method="post"
            aria-live="assertive"
          >
            <div className="block__entry__form__input">
              <input
                title="email"
                type="email"
                placeholder="Email"
                name="user-email"
                id="user-email"
                component="input"
                required
                ref={this.email}
              />
            </div>
            <div className="block__entry__form__input">
              <input
                title="Password"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                component="input"
                required
                ref={this.password}
              />
            </div>
            <button type="submit" className="block__entry__form__submit">
              Submit
            </button>
          </form>
          <div className="block__entry__alternate">
            <p>Don't have an account yet?</p>
            <Link to="/register" id="alternate">
              Register
            </Link>
          </div>
          {this.props.errorMessage && <p>{errorMessage}</p>}
          <div className="demo-user">
            <h3>Demo user credentials:</h3>
            <div>
              <p>email: demo@user.com</p>
              <p>password: demouser2018</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage
  };
};
export default connect(mapStateToProps)(LoginForm);
