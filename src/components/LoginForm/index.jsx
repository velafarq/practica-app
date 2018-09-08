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
                placeholder="email"
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
                placeholder="password"
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
            <p>
              <Link to="/register" id="alternate">
                Register
              </Link>
            </p>
          </div>
          {this.props.errorMessage && <p>{errorMessage}</p>}
          <div>
            <h3>Demo user credentials:</h3>
            <p>email: demo@user.com</p>
            <p>password: demouser2018</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isAuthenticated: state.isAuthenticated,
    isFetching: state.isFetching,
    error: state.error,
    errorMessage: state.errorMessage
  };
};
export default connect(mapStateToProps)(LoginForm);
