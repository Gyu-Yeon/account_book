import React, { useState } from "react";

export function Calender() {
  const [week, setWeek] = useState(["일", "월", "화", "수", "목", "금", "토"]);
  // const weekList = week.map((item) => {
  //   return <div> item </div>;
  // });

  return (
    <div className="calender mt-1">
      <div className="calendarRow1">
        {week.map((item) => {
          return (
            <div className="eachDay" key={item}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="calendarRow2"></div>
    </div>
  );
}
