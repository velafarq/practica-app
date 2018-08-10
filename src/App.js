import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
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

        <main>
          <section class="left-block">
            <section class="left-block__week">
              <h3 class="left-block__week__title">Your Week</h3>
              <a>Monday</a>
              <a>Tuesday</a>
              <a>Wednesday</a>
              <a>Thursday</a>
              <a>Friday</a>
              <a>Saturday</a>
              <a>Sunday</a>
            </section>
          </section>
          <section class="day">
            <div>
              <h2 class="day__title">Your stats for this week:</h2>

              <div>
                <div>
                  <p>
                    <span>5 </span>
                    practice hours logged so far
                  </p>
                </div>
                <div>
                  <p>
                    <span>5 </span>
                    practice days logged so far
                  </p>
                </div>
                <div>
                  <p>
                    <span>20 </span>
                    tasks completed so far
                  </p>
                </div>
                <div>
                  <p>
                    <span>5 </span>
                    practice hours logged so far
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="notepad">
            <h3 class="notepad__title">Notepad</h3>
            <textarea>
              Textarea with style example Line 1 Line 2 Line 3 Line 4 Line 5
              Line 6 Line 7 Line n
            </textarea>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
