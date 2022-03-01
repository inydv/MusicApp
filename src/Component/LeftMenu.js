import React from "react";
import "../Css/LeftMenu.css";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdRadio } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import Collections from "./Collections";

function LeftMenu() {

  let myStyle = {
    color: 'white',
    backgroundColor: 'black'
  }

  return (
    <div className="leftMenu">
      <div className="logos">
        <h1>DROP BROS</h1>
      </div>

      <ul className="conatiner">
        <li>
          <a href="#">
            <i>
              <AiFillHome />
            </i>
            HOME
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <MdRadio />
            </i>
            RADIO
          </a>
        </li>
      </ul>

      <Collections />

      <div className="general">
        <h6 className="generalHeading">GENERAL</h6>

        <ul className="generalConatiner">
          <li>
            <a href="#">
              <i>
                <AiFillSetting />
              </i>
              Setting
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <BiLogOutCircle />
              </i>
              Log Out
            </a>
          </li>
        </ul>
      </div>

      <div className="modes">
        <BsFillEmojiSunglassesFill />
        <GiMoonBats className="active" />
      </div>
    </div>
  );
}

export default LeftMenu;
