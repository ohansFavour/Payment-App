import React from "react";
import { Link } from "react-router-dom";

import "./completed.css";

const Completed = () => {
  return (
    <div className="completed__container">
      <div className="completed__content">
        <h1>
          <span
            className="iconify"
            data-icon="flat-color-icons:checkmark"
            data-inline="false"
            align="center"
          ></span>
        </h1>
        <span className="purchase">Purchase Completed</span>
        <span className="purchase__details">
          Please check your email for details concerning this transaction
        </span>
        <div className="link__container">
          <Link to="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Completed;
