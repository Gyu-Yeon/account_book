import React, { useState } from "react";

export function Calender() {
  const [week, setWeek] = useState(["일", "월", "화", "수", "목", "금", "토"]);
  // const weekList = week.map((item) => {
  //   return <div> item </div>;
  // });

  return (
    <div className="calender mt-1">
      <div className="row1">
        {week.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}
