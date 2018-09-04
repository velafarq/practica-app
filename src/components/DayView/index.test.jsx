import React from "react";
import { shallow } from "enzyme";
import DayView from "./index";

describe("<DayView />", () => {
  it("Should render without crashing", () => {
    shallow(<DayView />);
  });
});
