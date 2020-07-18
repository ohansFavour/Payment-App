import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import PersonalInfo from "../../containers/personal-info/personal-info";
import BillingInfo from "../../containers/billing-info/billing-info";
import ConfirmPayment from "../../containers/confirm-payment/confirm-payment";

import "./payment.css";
const Payment = (props) => {
  const [selected, setSelected] = useState(1);
  const buttonAction = (event) => {
    event.preventDefault();
    if (selected === 3) {
      props.history.push("/completed");
    }
    setSelected(selected + 1);
  };
  return (
    <div className="payment">
      <header>Complete your Purchase</header>
      <section className="tab">
        <div className="tab__container">
          <div
            id={selected === 1 ? "selected" : ""}
            onClick={() => setSelected(1)}
          >
            <span>Personal Info</span>{" "}
            <div className={selected === 1 ? "highlight" : ""}></div>
          </div>
          <div
            id={selected === 2 ? "selected" : ""}
            onClick={() => setSelected(2)}
          >
            Billing Info
            <div className={selected === 2 ? "highlight" : ""}></div>
          </div>
          <div
            id={selected === 3 ? "selected" : ""}
            onClick={() => setSelected(3)}
          >
            Confirm Payment
            <div className={selected === 3 ? "highlight" : ""}></div>
          </div>
        </div>
        <div className="horizontal__rule"></div>
      </section>
      <div className="payment__main">
        {selected === 1 && <PersonalInfo />}
        {selected === 2 && <BillingInfo />}
        {selected === 3 && <ConfirmPayment />}
      </div>
      <div className="footer">
        <button className="footer__button" onClick={(e) => buttonAction(e)}>
          {selected !== 3 ? "Next" : "Pay"}
        </button>
        <p>Cancel Payment</p>
      </div>
    </div>
  );
};

export default withRouter(Payment);
