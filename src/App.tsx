import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Header } from "./Header";
import { Budget } from "./Budget";
import { Calender } from "./Calendar";

function App() {
  const [month, setMonth] = useState<number>(1);

  return (
    <div className="main-back-ground">
      <Header month={month} />
      <Budget />
      <Calender />
    </div>
  );
}

export default App;
