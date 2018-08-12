import React from "react";
import { connect } from "react-redux";
import "./style.css";

export default function Stats(props) {
  return (
    <section className="day">
      <div>
        <h2 className="day__title">Your stats for this week:</h2>

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
      </div>
    </section>
  );
}
