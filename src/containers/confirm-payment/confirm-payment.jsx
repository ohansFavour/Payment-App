import React from "react";

import "./confirm-payment.css";

const ConfirmPayment = () => {
  // confirm payment data
  const itemsList = [
    { key: 1, name: "Data science and usability", price: 50000 },
    { key: 2, name: "Shipping", price: 0 },
  ];

  // convert number to comma separated values
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  //Add cost of all items
  const sumPrice = (list) => {
    return numberWithCommas(
      list.reduce((acc, item) => {
        return acc + item.price;
      }, 0)
    );
  };

  //main output
  return (
    <div className="confirm-payment">
      <section>
        <div className="header__content">
          <span>Item Name</span>
          <span>&#x20A6; Price</span>
        </div>
      </section>
      <div className="confirm-payment__list">
        {itemsList.map((item) => (
          <div key={item.key} className="header__content items">
            <span>{item.name}</span>
            <span>{numberWithCommas(item.price)}.00</span>
          </div>
        ))}
      </div>
      <div className="confirm-payment__hr">
        <hr />
      </div>
      <div className="header__content confirm-payment__total">
        <span>Total</span>
        <span>{sumPrice(itemsList)}</span>
      </div>
    </div>
  );
};

export default ConfirmPayment;
