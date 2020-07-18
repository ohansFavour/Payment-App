import React from "react";
import { Link } from "react-router-dom";

import "./completed.css";

const Completed = () => {
  return (
    <div className="completed__container">
      <div className="completed__content">
        <div className="completed__mark">
          <span
            className="iconify"
            data-icon="flat-color-icons:checkmark"
            data-inline="false"
          ></span>
        </div>
        <div className="completed__main">
          <div>
            <p className="purchase">Purchase Completed</p>
            <p className="purchase__details">
              Please check your email for details concerning this transaction
            </p>
            <div className="link__container">
              <Link to="/">Return Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
