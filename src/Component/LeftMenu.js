import React from "react";
import "../Css/LeftMenu.css";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import Collections from "./Collections";

function LeftMenu(props) {
  return (
    <div className="leftMenu" style={props.ComponentBGColor}>
      <div className="logos">
        <h1 style={props.LogoColor}>DROP BROS</h1>
      </div>

      <Collections
        Radio={props.Radio}
        ComponentTextColor={props.ComponentTextColor}
      />

      <div className="modes" style={props.ModeBGColor}>
        <BsFillEmojiSunglassesFill
          onClick={props.HomeLightMode}
          style={props.LightModeColor}
        />
        <GiMoonBats onClick={props.HomeDarkMode} style={props.DarkModeColor} />
      </div>
    </div>
  );
}

export default LeftMenu;
