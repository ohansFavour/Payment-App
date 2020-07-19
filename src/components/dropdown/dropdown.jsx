import React, { useState } from "react";
import PropTypes from "prop-types";

import "./dropdown.css";

const Dropdown = ({ label, list, placeholder, required }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const toggleDropdownMenu = (event) => {
    event.preventDefault();
    setDisplayMenu(!displayMenu);
  };

  const hideDropdownMenu = (event) => {
    setDisplayMenu(false);
    setSelected(event.target.innerHTML);
  };

  return (
    <div className="dropdown" data-test="dropdown-test">
      <label className={required ? "required" : ""}>{label}</label>
      <div className="dropdown__button" onClick={toggleDropdownMenu}>
        {" "}
        <span>{selected}</span>
        <i className="fa fa-chevron-down chev"></i>
      </div>

      {displayMenu ? (
        <ul>
          {list.map((item) => (
            <li key={item.key} onClick={hideDropdownMenu}>
              {item.value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
Dropdown.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array,
  placeholder: PropTypes.string,
  required: PropTypes.any,
};

export default Dropdown;
