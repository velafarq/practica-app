import React, { Fragment } from "react";
import "./style.css";

import WeekNav from "../WeekNav/index";
import Docket from "../Docket/index";
import TaskSection from "../TaskSection/index";

import Stats from "../Stats/index";

import "./style.css";

export default function Dashboard(props) {
  return (
    <Fragment>
      <WeekNav />
      <main className="background">
        <Stats />
        <TaskSection />
        <Docket />
      </main>
    </Fragment>
  );
}
