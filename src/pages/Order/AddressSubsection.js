import React from "react";

export default function AddressSubsection() {
  return (
    <div>
      Address <br />
      <label className="order-comment">*available in NCR area only</label>
      <div className="order-subdiv">
        House Number/Street
        <input className="order-txtbox txtbox-sub" type="text" />
        <br />
        City *
        <br />
        <select className="select-drop">
          <option value="">Choose City</option>
          <option value="Makati1">Makati1</option>
          <option value="Makati2">Makati2</option>
          <option value="Makati3">Makati3</option>
          <option value="Makati4">Makati4</option>
        </select>
        <br />
        Baranggay *
        <br />
        <select className="select-drop">
          <option value="">Choose Baranggay</option>
          <option value="Baranggay1">Baranggay1</option>
          <option value="Baranggay2">Baranggay2</option>
          <option value="Baranggay3">Baranggay3</option>
          <option value="Baranggay4">Baranggay4</option>
        </select>
      </div>
    </div>
  );
}
