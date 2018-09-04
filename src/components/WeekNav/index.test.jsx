import React from "react";
import { shallow } from "enzyme";
import WeekNav from "./index";

describe("<WeekNav />", () => {
  it("Should render without crashing", () => {
    shallow(<WeekNav />);
  });
});
