import React, { useState } from "react";
import "../../styles/order.css";
export default function Quantity() {
  const [quantity, setQuantity] = useState(0);

  function increment() {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  }
  return (
    <div className="quantity-div">
      <div className="quantity-subdiv-1">
        <div className="text-price">₱55</div>
        <div className="chili-pic-div "></div>
      </div>
      <div className="quantity-subdiv-2">
        <label className="text-total">Total:</label>
        &nbsp; &nbsp;
        <label className="text-total-num">{quantity * 55}</label>
        <div className="quantity-picker-div">
          <button className="quantity-picker-button" onClick={decrement}>
            -
          </button>
          <input
            className="quantity-picker"
            placeholder={quantity}
            disabled
          ></input>
          <button className="quantity-picker-button" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
