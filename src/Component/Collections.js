import React from "react";
import { MdRadio } from "react-icons/md";

function Collections(props) {
  return (
    <div className="collection">
      <div className="conatiner" style={props.ComponentTextColor}>
        <i>
          <MdRadio />
        </i>
        RADIO TRACKS
      </div>

      <div className="collectionDiv">
        <ul className="collectonList">
          {props.Radio &&
            props.Radio.map((list) => (
              <li className="listId" key={list.channel_id}>
                <a
                  href="#"
                  className="listLink"
                  style={props.ComponentTextColor}
                >
                  <div className="listName">{list.name}</div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Collections;
