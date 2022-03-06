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

  it("is dashboard reading text available", () => {
    expect(wrapper.find(".dashboard_reading").text()).toEqual("Joined Clubs");
  });

  it("is dashboard explore text awailable", () => {
    expect(wrapper.find(".dashboard_explore").text()).toEqual(
      "Explore New Clubs"
    );
  });
});
