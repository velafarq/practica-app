import React from "react";
import { connect } from "react-redux";

import "./style.css";

export default function Header(props) {
  return (
    <header class="banner">
      <div class="header">
        <div class="header__logo">
          <i class="far fa-calendar-check header__logo__img" />
        </div>
        <h1 class="title">practica</h1>
        <nav class="header__nav">
          <a href="#" class="header__nav__link">
            dashboard
          </a>
          <a href="#" class="header__nav__link">
            logout
          </a>
        </nav>
      </div>
    </header>
  );
}
