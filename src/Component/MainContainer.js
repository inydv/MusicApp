import React from "react";
import "../Css/MainContainer.css";
import Items from "./Items";

function MainContainer(props) {
  return (
    <div className="mainContainer" style={props.MainContainerColor}>
      { props.track.map((ele) => {
         return <Items image={ele.share.image} title={ele.title} MainContainerTextColor={props.MainContainerTextColor} />
      })}
    </div>
  );
}

export default MainContainer;
