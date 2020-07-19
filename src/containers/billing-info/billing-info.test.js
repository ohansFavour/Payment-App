import React from "react";
import BillingInfo from "./billing-info";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils";

describe("Billing Info Container", () => {
  
  describe("renders properly", () => {
    let component;
    beforeEach(() => {
      component = shallow(<BillingInfo/>);
    });
    it("renders the info container", () => {
      const wrapper = findByTestAtrr(component, "billing-test");
      expect(wrapper.length).toBe(1);
    });
  });
});