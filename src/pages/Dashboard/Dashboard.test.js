import React from "react";
import { shallow, mount } from "enzyme";
import Dashboard from "./Dashboard";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Dashboard />);
});

describe("dashboard basic tests", () => {
  it("is dashboard explore text awailable", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
