import React from "react";
import AddressSubsection from "./AddressSubsection";
import DeliverySubsection from "./DeliverySubsection";
import PaymentSubsection from "./PaymentSubsection";
import DatePage from "./DatePage";
import CommentSection from "./CommentSection";
import "../../styles/order.css";

export default function OrderForm() {
  return (
    <div className="order-div">
      Name (First Name, Last Name) * <br />
      <input className="order-txtbox txtbox-main" type="text" /> <br />
      Contact Number *
      <br />
      <input className="order-txtbox txtbox-main" type="text" />
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
