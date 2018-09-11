import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/users";

import "./style.css";

class Header extends React.Component {
  handleLogout() {
    this.props.dispatch(logout());
  }
  render() {
    return (
      <header className="banner ">
        <div className="header">
          <Link to="/">
            <div className="header__logo">
              <img
                alt="practica-logo"
                className="header__logo__img"
                src={require("../../assets/images/practica-logo.png")}
              />

              <h1 className="title">practica</h1>
            </div>
          </Link>
          <nav className="header__nav">
            {!this.props.isAuthenticated && (
              <Fragment>
                <Link to="/login" className="header__nav__link">
                  login
                </Link>
              </Fragment>
            )}

            {this.props.isAuthenticated && (
              <Fragment>
                {" "}
                <Link to="/dashboard" className="header__nav__link">
                  dashboard
                </Link>
                <Link
                  onClick={e => this.handleLogout(e)}
                  to="/"
                  className="header__nav__link"
                >
                  logout
                </Link>
              </Fragment>
            )}
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);
