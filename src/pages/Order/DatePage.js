import React, { useState } from "react";
import "../../styles/order.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePage() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      Preferred Delivery Date *
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        showYearDropdown
        dropdownMode="select"
        className="calendar-picker"
      />
    </div>
  );
}
