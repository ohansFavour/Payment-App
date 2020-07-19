import React from "react";
import PropTypes from "prop-types";

import "./form-input.css";

const FormInput = (props) => {
  const { placeholder, label, required, info, background } = props;
  return (
    <div id="form__container" data-test= "form-input-test">
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

FormInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.any,
  info: PropTypes.string,
  background: PropTypes.any,
};

export default FormInput;
