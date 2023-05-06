import React from "react";
import useDragger from "../hooks/useDragger";
import '../styles/box.css';

const SmallBox = () => {
  
  useDragger("small-box");
  return <h1>teste</h1>;
};

export default SmallBox;