import React, { useState } from "react";
import "../Css/LeftMenu.css";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdRadio } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import Collections from "./Collections";

function LeftMenu() {

  const [LeftMenuBGColor, setLeftMenuBGColor] = useState({
    backgroundColor: "rgba(35,36,40,255)"
  })

  const [LeftMenuLogoColor, setLeftMenuLogoColor] = useState({
    color: "whitesmoke",
    textShadow: "5px 10px 10px whitesmoke"
  })

  const [LeftMenuTextColor, setLeftMenuTextColor] = useState({
    color: "whitesmoke"
  })

  const [LeftMenuLightModeColor, setLeftMenuLightModeColor] = useState({
    color: "white"
  })

  const [LeftMenuDarkModeColor, setLeftMenuDarkModeColor] = useState({
    color: "darkgreen"
  })

  function lightMode() {

      setLeftMenuBGColor({
        backgroundColor: "rgba(237,237,237,255)"
      })
      setLeftMenuLogoColor({
        color: "black",
        textShadow: "5px 10px 10px black"
      })
      setLeftMenuTextColor({
        color: "black"
      })
      setLeftMenuLightModeColor({
        color: "darkgreen"
      })
      setLeftMenuDarkModeColor({
        color: "white"
      })
  }

  function darkMode() {

    setLeftMenuBGColor({
      backgroundColor: "rgba(35,36,40,255)"
    })
    setLeftMenuLogoColor({
      color: "whitesmoke",
      textShadow: "5px 10px 10px whitesmoke"
    })
    setLeftMenuTextColor({
      color: "whitesmoke"
    })
    setLeftMenuLightModeColor({
      color: "white"
    })
    setLeftMenuDarkModeColor({
      color: "darkgreen"
    })
  }

  return (
    <div className="leftMenu" style={LeftMenuBGColor}>
      <div className="logos">
        <h1 style={LeftMenuLogoColor}>DROP BROS</h1>
      </div>

      <ul className="conatiner">
        <li>
          <a href="#" style={LeftMenuTextColor}>
            <i>
              <AiFillHome />
            </i>
            HOME
          </a>
        </li>
        <li>
          <a href="#" style={LeftMenuTextColor}>
            <i>
              <MdRadio />
            </i>
            RADIO
          </a>
        </li>
      </ul>

      <Collections style={LeftMenuTextColor} />

      <div className="general">
        <h6 className="generalHeading" style={LeftMenuTextColor}>GENERAL</h6>

        <ul className="generalConatiner">
          <li>
            <a href="#" style={LeftMenuTextColor}>
              <i>
                <AiFillSetting />
              </i>
              Setting
            </a>
          </li>
          <li>
            <a href="#" style={LeftMenuTextColor}>
              <i>
                <BiLogOutCircle />
              </i>
              Log Out
            </a>
          </li>
        </ul>
      </div>

      <div className="modes">
        <BsFillEmojiSunglassesFill onClick={lightMode} style={LeftMenuLightModeColor} />
        <GiMoonBats onClick={darkMode} style={LeftMenuDarkModeColor} />
      </div>
    </div>
  );
}

export default LeftMenu;
