import React from "react";
import "../Css/MainContainer.css";

function MainContainer(props) {
  let { ComponentBGColor, ComponentTextColor, track } = props;
  return (
    <div className="mainContainer" style={ComponentBGColor}>
      {track.map((ele) => {
        return (
          <div className="items">
            <img src={ele.image} />
            <h5 style={ComponentTextColor}>{ele.song}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default MainContainer;
