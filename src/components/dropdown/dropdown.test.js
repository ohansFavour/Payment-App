import React from "react";
import DropDown from "./dropdown";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../utils";

describe("DropDown Component", () => {
  describe("check prop types", () => {
    it("should have the right props", () => {
      const expectedProps = {
        buttonText: "button text test",
        emitEvent: () => {},
        label: "test label",
        list: [],
        placeholder: "test placeholder",
        required: false,
      };

      const propsError = checkProps(DropDown, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("renders properly", () => {
    let component;
    beforeEach(() => {
      component = shallow(<DropDown />);
    });
    it("renders the dropDown", () => {
      const wrapper = findByTestAtrr(component, "dropdown-test");
      expect(wrapper.length).toBe(1);
    });
  });
});
