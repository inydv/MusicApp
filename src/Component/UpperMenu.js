import React from "react";
import "../Css/UpperMenu.css";

function UpperMenu(props) {
  return (
    <div className="upperMenu">
      <h4 className="firstP" style={props.UpperMenuColor}>Hello Buddy 👋</h4>
      <h3 className="secondP" style={props.UpperMenuColor}>
        Your <span className="m">M</span>
        <span className='o'>oo</span>
        <span className='d'>d</span> Today ?
      </h3>
    </div>
  );
}

export default UpperMenu;
