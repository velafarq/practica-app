import React from "react";
import sinon from "sinon";

import { mount, shallow, render } from "enzyme";

const willMount = sinon.spy();
const didMount = sinon.spy();
const willUnmount = sinon.spy();

import App from "../components/App/index";

describe("App", () => {
  it("Renders without crashing", () => {
    shallow(<App />);
  });
});
