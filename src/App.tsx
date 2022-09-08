import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Header } from "./Header";
import { Budget } from "./Budget";
import { Calender } from "./Calendar";
import { Categories } from "./Categories";
import { Footer } from "./Footer";

function App() {
  const [month, setMonth] = useState<number>(1);

  return (
    <div className="main-back-ground">
      <Header month={month} />
      <Budget />
      <Calender />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
