import React, { useState } from "react";
import AddressSubsection from "./AddressSubsection";
import DeliverySubsection from "./DeliverySubsection";
import PaymentSubsection from "./PaymentSubsection";
import DatePage from "./DatePage";
import CommentSection from "./CommentSection";
import "../../styles/order.css";
import "../../styles/common.css";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState(false);
  const [nameError, setNameError] = useState(false);

  function checkName(e) {
    e.preventDefault();
    setNameError(false);
    if (name.length === 0) setNameError(true);
  }
  function checkContact(e) {
    e.preventDefault();
    setContactError(false);
    if (e.target.value.length === 11) return;
    if (parseFloat(e.target.value) === !NaN) return;
    setContactError(true);
  }

  return (
    <div className="order-div">
      Name (First Name, Last Name) * <br />
      <input
        className="order-txtbox txtbox-main"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={checkName}
      />
      {nameError && <div className="error">Please input name</div>}
      <br />
      Contact Number *
      <br />
      <input
        className="order-txtbox txtbox-main"
        type="number"
        value={contact}
        placeholder="09XXXXXXXXX"
        onChange={(e) => setContact(e.target.value)}
        onBlur={checkContact}
      />
      {contactError && (
        <div className="error">Please Input Correct Contact Number.</div>
      )}
      <br />
      <AddressSubsection />
      <DeliverySubsection />
      <PaymentSubsection />
      <br />
      <DatePage />
      <CommentSection />
      <button className="button-green">Check Out</button>
    </div>
  );
}
