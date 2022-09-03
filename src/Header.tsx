import React, { useState } from "react";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ArticleIcon from "@mui/icons-material/Article";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

export type HeaderModel = {
  month: number;
};

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
