import React, { useState } from "react";
import logo from "./logo.svg";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ArticleIcon from "@mui/icons-material/Article";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import "./App.scss";

export type HeaderModel = {
  month: number;
};

function App() {
  const [month, setMonth] = useState<number>(1);

  return (
    <div className="main-back-ground">
      <Header month={month} />
      <Budget />
    </div>
  );
}

export function Header(props: HeaderModel) {
  console.log(props);
  const { month } = props;

  return (
    <div className="header">
      <div className="left-header">
        <FormatAlignCenterIcon style={{ transform: "rotate(90deg)" }} />
        <ArticleIcon />
      </div>
      <div className="middle-header">{month}월</div>
      <div className="right-header">
        <SearchIcon />
        <TuneIcon />
      </div>
    </div>
  );
}

export function Budget() {
  return (
    <div className="budget">
      <div className="incomeOutcome">
        <div className="income">수입</div>
        <div className="outcome">지출</div>
      </div>
      <div className="balance">현금잔액</div>
    </div>
  );
}

export function Calender() {
  return <div className="calender"></div>;
}

export default App;
