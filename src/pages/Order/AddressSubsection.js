import React, { useState } from "react";
import { cities } from "../../data/address.json";

export default function AddressSubsection() {
  const [housestreet, setHousestreet] = useState("");
  const [houseStreetError, setHouseStreetError] = useState(false);
  const [city, setCity] = useState("");
  const [baranggay, setBaranggay] = useState("");
  const [baranggayList, setBaranggayList] = useState([]);

  function checkHouseStreet() {
    setHouseStreetError(false);
    if (housestreet.length === 0) setHouseStreetError(true);
  }

  function citySelect(e) {
    setCity(e.target.value);
    setBaranggayList(cities.find((a) => a.value === e.target.value).baranggay);
  }

  return (
    <div>
      Address <br />
      <label className="order-comment">*available in NCR area only</label>
      <div className="order-subdiv">
        House Number/Street
        <br />
        <input
          className="order-txtbox txtbox-sub"
          type="text"
          value={housestreet}
          onChange={(e) => setHousestreet(e.target.value)}
          onBlur={(e) => checkHouseStreet()}
        />
        {houseStreetError && (
          <div className="error">Please Enter House Number/Street.</div>
        )}
        <br />
        City *
        <br />
        <select
          className="select-drop"
          value={city}
          onChange={(e) => citySelect(e)}
        >
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        <br />
        Baranggay *
        <br />
        <select
          className="select-drop"
          value={baranggay}
          onChange={(e) => setBaranggay(e.target.value)}
        >
          {baranggayList.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
