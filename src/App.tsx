import React, { useState } from "react";
import logo from "./logo.svg";

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
