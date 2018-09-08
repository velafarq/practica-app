import React, { Fragment } from "react";

import { connect } from "react-redux";
import "./style.css";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/users";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      errors: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.email.current.value;
    const password = this.password.current.value;
    e.target.reset();
    const errors = this.handleValidation(password);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.props.dispatch(register(email, password));
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
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    const { errors } = this.state;
    const { errorMessage } = this.props;
    return (
      <Fragment>
        <div className="block__entry">
          <h2 className="block__entry__form__title">REGISTER</h2>
          <form
            onSubmit={e => this.handleSubmit(e)}
            className="block__entry__form"
            id="register-new-user"
            method="post"
            aria-live="assertive"
          >
            {errors.map(error => (
              <p key={error}>{error} </p>
            ))}

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
              <Link to="/login" id="alternate">
                Login
              </Link>
            </p>
          </div>
          {this.props.errorMessage && <p>{errorMessage}</p>}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    errorMessage: state.errorMessage
  };
};

export default connect(mapStateToProps)(RegisterForm);
