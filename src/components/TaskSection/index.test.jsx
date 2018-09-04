import React from "react";
import { shallow } from "enzyme";
import TaskSection from "./index";

describe("<TaskSection />", () => {
  it("Should render without crashing", () => {
    shallow(<TaskSection />);
  });
});
