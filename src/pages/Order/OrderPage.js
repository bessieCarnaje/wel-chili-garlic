import React from "react";
import Header from "../Common/Header";
import ImagePanel from "./ImagePanel";
import Quantity from "./Quantity";
import OrderForm from "./OrderForm";
import "../../styles/common.css";

export default function OrderPage() {
  return (
    <div>
      <Header />
      <ImagePanel />
      <Quantity />
      <OrderForm />
    </div>
  );
}
