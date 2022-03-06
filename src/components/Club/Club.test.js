import React from "react";
import { shallow, mount } from "enzyme";
import Club from "./Club";

import club_data from "../../data/club.json";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Club club={club_data.clubs[0]} />);
});

describe("dashboard basic tests", () => {
  it("is snapshot changed", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
