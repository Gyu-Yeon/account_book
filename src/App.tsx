import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.scss";
import { Header } from "./Header";
import { Budget } from "./Budget";

function App() {
  const [month, setMonth] = useState<number>(1);

  return (
    <div className="main-back-ground">
      <Header month={month} />
      <Budget />
    </div>
  );
}

export function Calender() {
  return <div className="calender"></div>;
}

export default App;
