import React, { useState } from "react";
import Cleave from "cleave.js/react";

import "./credit-card.css";

const CardDetails = () => {
  const [customValue, setCustomValue] = useState("");

  function onCustomValueChange(e) {
    setCustomValue(e.target.rawValue);
  }

  return (
    <div>
      <label className="required">Card Details</label>
      <Cleave
        placeholder="44960  44960  44960  44960"
        options={{
          blocks: [5, 5, 5, 5],
          delimiter: " ",
          numericOnly: true
          
        }}
        onChange={onCustomValueChange}
        className="form-field card__input"
        type= "card-detail"
      />
    </div>
  );
};

export default CardDetails;
