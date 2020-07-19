import React from "react";

import FormInput from "../../components/form-input/form-input";
import DropDown from "../../components/dropdown/dropdown";
import CardDetails from "../../components/credit-card/card-details";
import ExpiryDate from "../../components/credit-card/expiry-date";
import Cvv from "../../components/credit-card/cvv";

import "./billing-info.css";

const BillingInfo = () => {
  //card types data
  const dropDownList = [
    { key: 1, value: "Visa" },
    { key: 2, value: "Master Card" },
    { key: 3, value: "Prepaid" },
  ];

  //main output
  return (
    <div>
      <FormInput
        label="Name of Card"
        required
        placeholder="Opera Linus Ahmed"
      />
      <DropDown
        list={dropDownList}
        placeholder="Visa"
        label="Card Type"
        required
      />
      <div className="billing__details normal">
        <div className="billing__details__number">
          <CardDetails />
        </div>{" "}
        <div className="billing__details__others">
          <ExpiryDate />
          <div className="billing__cvv">
            <Cvv />
          </div>
        </div>
      </div>
      <div className="billing__details large">
        <div className="billing__details__number">
          <CardDetails />
        </div>
        <div className="billing__details__expiry">
          <ExpiryDate />
        </div>
        <div className="billing__details__cvv">
          <Cvv />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
