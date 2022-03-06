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
              <li className="listId" key={list.channel_id} onClick={() => props.setRadio(list.uri, list.image_url)}>
                <p
                  className="listLink"
                  style={props.ComponentTextColor}
                >
                  <div className="listName">{list.name}</div>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Collections;
