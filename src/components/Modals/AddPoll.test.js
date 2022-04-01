import React from "react";
import { shallow, mount } from "enzyme";
import AddPoll from "./AddPoll";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<AddPoll open={true} />);
});

describe("AddPoll basic tests", () => {
  it("is snapshot changed", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
