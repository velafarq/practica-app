import React from "react";
import { shallow } from "enzyme";
import NotesView from "./index";

describe("<NotesView />", () => {
  it("Should render without crashing", () => {
    shallow(<NotesView />);
  });
});
