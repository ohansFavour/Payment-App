import React from "react";

import FormInput from "../../components/form-input/form-input";
import DropDown from "../../components/dropdown/dropdown";

import "./personal-info.css";

const PersonalInfo = () => {
  const dropDownList = [
    { key: 1, value: "Lagos" },
    { key: 2, value: "Oyo" },
    { key: 3, value: "Abuja" },
  ];
  return (
    <form className="personal__info">
      <FormInput label="Name" placeholder="Opara Linus Ahmed" />
      <FormInput
        label="Email Address"
        placeholder="OparaLinusAhmed@devmail.com"
        required
        info="The purchase receipt would be sent to this address"
      />
      <FormInput
        label="Address 1"
        placeholder="The address of the user goes here"
      />
      <FormInput label="Address 2" placeholder="and here" />
      <div className="shared">
        <div className="lg">
          <FormInput label="Local Government" placeholder="Surulere" />
        </div>
        <div className="dm">
          <DropDown label="State" list={dropDownList} placeholder="Lagos" />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
