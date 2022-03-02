import React, { useState } from "react";
import "../Css/LeftMenu.css";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdRadio } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
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

      <Collections style={props.LeftMenuTextColor} />

      <div className="general">
        <h6 className="generalHeading" style={props.LeftMenuTextColor}>GENERAL</h6>

        <ul className="generalConatiner">
          <li>
            <a href="#" style={props.LeftMenuTextColor}>
              <i>
                <AiFillSetting />
              </i>
              Setting
            </a>
          </li>
          <li>
            <a href="#" style={props.LeftMenuTextColor}>
              <i>
                <BiLogOutCircle />
              </i>
              Log Out
            </a>
          </li>
        </ul>
      </div>

      <div className="modes" style={props.ModeBGColor}>
        <BsFillEmojiSunglassesFill onClick={props.HomeLightMode} style={props.LightModeColor} />
        <GiMoonBats onClick={props.HomeDarkMode} style={props.DarkModeColor} />
      </div>
    </div>
  );
}

export default LeftMenu;
