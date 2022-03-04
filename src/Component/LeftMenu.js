import React, { useState } from "react";
import "../Css/LeftMenu.css";
import { AiFillHome} from "react-icons/ai";
import { MdRadio } from "react-icons/md";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import Collections from "./Collections";

function LeftMenu(props) {
  return (
    <div className="leftMenu" style={props.LeftMenuBGColor}>
      <div className="logos">
        <h1 style={props.LeftMenuLogoColor}>DROP BROS</h1>
      </div>

      <ul className="conatiner">
        <li>
          <a href="#" style={props.LeftMenuTextColor}>
            <i>
              <AiFillHome />
            </i>
            HOME
          </a>
        </li>
        <li>
          <a href="#" style={props.LeftMenuTextColor}>
            <i>
              <MdRadio />
            </i>
            RADIO
          </a>
        </li>
      </ul>

      <Collections track={props.track} style={props.LeftMenuTextColor} />

      <div className="modes" style={props.ModeBGColor}>
        <BsFillEmojiSunglassesFill onClick={props.HomeLightMode} style={props.LightModeColor} />
        <GiMoonBats onClick={props.HomeDarkMode} style={props.DarkModeColor} />
      </div>
    </div>
  );
}

export default LeftMenu;
