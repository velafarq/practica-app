import React, { Fragment } from "react";
import WeekNav from "../WeekNav/index";
import Notepad from "../Notepad/index";
import TaskSection from "../TaskSection/index";
import "./style.css";

export default function DayView(props) {
  return (
    <Fragment>
      <WeekNav />
      <main>
        <TaskSection />
        <Notepad />
      </main>
    </Fragment>
  );
}
