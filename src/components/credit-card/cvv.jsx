import React, { useState } from "react";
import Cleave from "cleave.js/react";

import "./credit-card.css";

const Cvv = () => {
  const [cvv, setCVV] = useState("");

  function onCVVChange(e) {
    setCVV(e.target.rawValue);
  }

  return (
    <div>
      <label className="required">CVV</label>
      <Cleave
        placeholder="923"
        options={{
          blocks: [3],
          numericOnly: true,
        }}
        onChange={onCVVChange}
        className="form-field card__input"
        type="cvv"
      />
    </div>
  );
};

export default Cvv;
