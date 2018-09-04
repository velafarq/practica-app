import React from "react";
import { shallow } from "enzyme";
import NotePad from "./index";

describe("<NotePad />", () => {
  it("Should render without crashing", () => {
    shallow(<NotePad />);
  });
});
