import React from "react";
import { connect } from "react-redux";
import "./style.css";

export default function Stats(props) {
  return (
    <section className="stats">
      <div className="stats__title__box">
        <h2 className="stats__title">Stats</h2>
      </div>
      <div>
        <div>
          <p className="day__stat">
            <span className="day__stat__num">5 </span>
            practice hours logged
          </p>
        </div>
        <div>
          <p className="day__stat">
            <span className="day__stat__num">3 </span>
            practice days logged
          </p>
        </div>
        <div>
          <p className="day__stat">
            <span className="day__stat__num">20 </span>
            tasks completed
          </p>
        </div>
        <div>
          <p className="day__stat">
            <span className="day__stat__num">2 </span>
            goals met
          </p>
        </div>
      </div>
    </section>
  );
}
