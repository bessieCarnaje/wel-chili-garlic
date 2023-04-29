import React from "react";

export default function PaymentSubsection() {
  return (
    <div>
      <br />
      Payment Options *
      <div className="order-subdiv ">
        <label>
          <input type="radio" name="payment" value="gcash" />
          GCash
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="order-comment2">
            *Payment will be refunded in case transaction <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; does not push through
          </label>
        </label>
        <br />
        <label>
          <input type="radio" name="payment" value="cash" />
          Cash On Delivery
          <br />
        </label>
      </div>
    </div>
  );
}
