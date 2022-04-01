import React from "react";
import { shallow, mount } from "enzyme";
import ClubProgress from "./ClubProgress";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ClubProgress />);
});

describe("dashboard basic tests", () => {
  it("is snapshot changed", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
