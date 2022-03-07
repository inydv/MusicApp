import React from "react";
import "../Css/MainContainer.css";

function MainContainer(props) {
  let { ComponentBGColor, ComponentTextColor, songs, setMainSong } = props;

  return (
    <div className="mainContainer" style={ComponentBGColor}>
      {songs &&
        songs.map((ele) => (
          <div className="items" key={ele.id} onClick={() => setMainSong(ele.song, ele.imgSrc)}>
            <img src={ele.imgSrc} alt="" />
            <h5 style={ComponentTextColor}>{ele.artist}</h5>
          </div>
        ))}
    </div>
  );
}

export default MainContainer;
