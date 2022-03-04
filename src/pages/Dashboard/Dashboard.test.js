import React from "react";
import { shallow, mount } from "enzyme";
import Dashboard from "./Dashboard";

let wrapper;
beforeEach(() => {
  wrapper = mount(<Dashboard />);
});

describe("dashboard basic tests", () => {
  it("is dashboard renders", () => {
    expect(wrapper.find(".dashboard-title").text()).toEqual("Dashboard");
  });
});
