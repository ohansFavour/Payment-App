import React from "react";
import FormInput from "./form-input";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../utils";

describe("Form Input Component", () => {
  describe("check prop types", () => {
    it("should have the right props", () => {
      const expectedProps = {
        placeholder: "test placeholder",
        label: "test label",
        required: true,
        info: "test string",
        background: false,
      };

      const propsError = checkProps(FormInput, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("renders properly", () => {
    let component;
    beforeEach(() => {
      component = shallow(<FormInput />);
    });
    it("renders the formInput", () => {
      const wrapper = findByTestAtrr(component, "form-input-test");
      expect(wrapper.length).toBe(1);
    });
  });
});