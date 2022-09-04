import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calender">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
