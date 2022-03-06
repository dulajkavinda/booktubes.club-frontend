import React from "react";
import { shallow, mount } from "enzyme";

import ViewClub from "./ViewClub";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ViewClub />);
});

describe("view club basic tests", () => {
  it("is snapshot changed", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
