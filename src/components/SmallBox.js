import React from "react";
import useDragger from "../hooks/useDragger";
import '../styles/box.css';

const SmallBox = () => {
  
  useDragger("small-box");

  return <div id="small-box" className="box"></div>
};

export default SmallBox;