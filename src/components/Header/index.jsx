import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./style.css";

export default function Header(props) {
  return (
    <header className="banner headerDashboard">
      <div className="header">
        <div className="header__logo">
          <i className="far fa-calendar-check header__logo__img" />
        </div>
        <h1 className="title">practica</h1>
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
