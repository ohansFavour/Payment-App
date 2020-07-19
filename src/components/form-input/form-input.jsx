import React from "react";

import "./form-input.css";

const FormInput = (props) => {
  const { placeholder, label, required, info, background } = props;
  return (
    <div id="form__container">
      <label
        className={`${label ? "label" : "none"} ${required ? "required" : ""}`}
      >
        {label}
      </label>
      <p className={info ? "muted" : "none"}>{info}</p>
      <div className="input__container">
        <input
          className={`${background ? "background" : ""} "form__input "`}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FormInput;
