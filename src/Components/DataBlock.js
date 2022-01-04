import React from "react";
import allPersonalData from "./Data";

function DataBlock() {
  return (
    <div className="DataBlock">
      <img src={allPersonalData[0].image} alt=""></img>
      <h3>{allPersonalData[0].year}</h3>
      <h4>{allPersonalData[0].description}</h4>
    </div>
  );
}

export default DataBlock;
