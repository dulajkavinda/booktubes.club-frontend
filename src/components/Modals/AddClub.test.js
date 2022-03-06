import React from "react";
import { shallow, mount } from "enzyme";

import AddClub from "./AddClub";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<AddClub />);
});

describe("add club basic tests", () => {
  it("is snapshot changed", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
