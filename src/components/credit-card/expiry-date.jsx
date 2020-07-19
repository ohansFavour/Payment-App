import React, { useState } from "react";
import Cleave from "cleave.js/react";

import "./credit-card.css";

const ExpiryDate = () => {
  const [creditCardExpiryDate, setCreditCardExpiryDate] = useState("");

  function onCreditCardExpiryChange(e) {
    setCreditCardExpiryDate(e.target.rawValue);
  }

  return (
    <div>
      <label className="required">Expiry Date</label>
      <Cleave
        placeholder="04 / 23"
        options={{ date: true, datePattern: ["m", "d"] }}
        onChange={onCreditCardExpiryChange}
        className="form-field card__input"
        type="expiry"
      />
    </div>
  );
};

export default ExpiryDate;
