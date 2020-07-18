import React from "react";

import "./form-input.css";

const FormInput = (props) => {
  const { placeholder, label, required, info, background } = props;
  return (
    <div id="form__container">
      <label
        className={label ? "label" : "none"}
        className={required ? "required" : ""}
      >
        {label}
      </label>
      <p className={info ? "muted" : "none"}>{info}</p>
      <div className="input__container">
        <input
          className="form__input "
          className={background ? "background" : ""}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FormInput;
