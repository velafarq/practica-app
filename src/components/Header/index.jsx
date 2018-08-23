import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./style.css";

export default function Header(props) {
  return (
    <header className="banner headerDashboard">
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img
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
