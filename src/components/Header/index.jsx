import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

export default class LandingPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  loggedInStatus = () => {
    const IS_LOGGED_IN = !!localStorage.getItem("token");

    if (IS_LOGGED_IN) {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    return (
      <header className="banner headerDashboard">
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
            <Link to="/dashboard" className="header__nav__link">
              dashboard
            </Link>
            <Link to="/" className="header__nav__link">
              logout
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
