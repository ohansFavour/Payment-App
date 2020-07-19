import React from "react";
import ConfirmPayment from "./confirm-payment";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils";

describe("Confirm Payment Container", () => {
  
  describe("renders properly", () => {
    let component;
    beforeEach(() => {
      component = shallow(<ConfirmPayment/>);
    });
    it("renders the confirm-payment container", () => {
      const wrapper = findByTestAtrr(component, "confirm-test");
      expect(wrapper.length).toBe(1);
    });
  });
});