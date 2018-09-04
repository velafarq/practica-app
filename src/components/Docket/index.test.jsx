import React from "react";
import { shallow } from "enzyme";
import Docket from "./index";

describe("<Docket />", () => {
  it("Should render without crashing", () => {
    shallow(<Docket />);
  });
});
