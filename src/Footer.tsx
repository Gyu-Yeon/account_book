import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export function Footer() {
  return (
    <div className="footer">
      <div className="monthly">
        <CalendarMonthIcon />
      </div>
      <div className="weekly"></div>
      <div className="daily"></div>
      <div className="setting"></div>
    </div>
  );
}
