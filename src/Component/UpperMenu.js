import React from "react";
import "../Css/UpperMenu.css";

function UpperMenu({ ComponentTextColor }) {
  // Derefrencing of props
  return (
    <div className="upperMenu">
      <h5 className="firstP" style={ComponentTextColor}>
        Your Songs Here Buddy👋
      </h5>
      <h4 className="secondP" style={ComponentTextColor}>
        Your <span className="m">M</span>
        <span className="o">oo</span>
        <span className="d">d</span> Today ?
      </h4>
    </div>
  );
}

export default UpperMenu;
