import React from "react";
import "../../styles/order.css";
export default function Quantity() {
  return (
    <div className="quantity-div">
      <div className="quantity-subdiv-1">
        <div className="text-price">₱55</div>
        <div className="chili-pic-div "></div>
      </div>
      <div className="quantity-subdiv-2">
        <label className="text-total">Total:</label>
        &nbsp; &nbsp;
        <label className="text-total-num">550</label>
        <div class="input-container">
          <input
            className="quantity-picker "
            type="number"
            min="0"
            max="10"
            placeholder="0"
          ></input>
        </div>
      </div>
    </div>
  );
}
