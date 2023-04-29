import React from "react";

export default function DeliverySubsection() {
  return (
    <div>
      <br />
      Delivery Options *
      <div className="order-subdiv ">
        <label>
          <input type="radio" name="delivery" value="1" />
          Meet Up @Mandaluyong High School <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="order-comment2">
            * Available Monday-Friday, 5PM-6PM
          </label>
        </label>
        <br />
        <label>
          <input type="radio" name="delivery" value="1" />
          Meet Up @Boni Station <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="order-comment2">
            *Available Monday-Friday, 5PM-6PM
          </label>
        </label>
        <br />
        <label>
          <input type="radio" name="delivery" value="1" />
          Lalamove <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="order-comment2">
            *delivery fee will be shouldered by buyer{" "}
          </label>
        </label>
      </div>
    </div>
  );
}
