import React from "react";
import { shallow } from "enzyme";
import Stats from "./index";

describe("<Stats />", () => {
  it("Should render without crashing", () => {
    shallow(<Stats />);
  });
});
