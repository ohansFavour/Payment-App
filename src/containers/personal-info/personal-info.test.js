import React from "react";
import PersonalInfo from "./personal-info";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils";

describe("personal info Container", () => {
  
  describe("renders properly", () => {
    let component;
    beforeEach(() => {
      component = shallow(<PersonalInfo/>);
    });
    it("renders the personalInfo container", () => {
      const wrapper = findByTestAtrr(component, "personal-info-test");
      expect(wrapper.length).toBe(1);
    });
  });
});