import React from "react";
import { shallow } from "enzyme";
import PracticeSection from "./index";

describe("<PracticeSection />", () => {
  it("Should render without crashing", () => {
    shallow(<PracticeSection />);
  });
});
