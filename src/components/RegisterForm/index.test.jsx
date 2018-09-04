import React from "react";
import { shallow } from "enzyme";
import RegisterForm from "./index";

describe("<RegisterForm />", () => {
  it("Should render without crashing", () => {
    shallow(<RegisterForm />);
  });
});
