import React from "react";
import { CollectionsList } from "./CollectionsList";

function Collections(props) {
  return (
    <div className="collection">
      <h6 className="collectionHeading" style={props.style}>COLLECTION</h6>

      <div className="collectionDiv">
        <ul className="collectonList">
          {CollectionsList &&
            CollectionsList.map((list) => (
              <li className="listId" key={list.id}>
                <a href="#" className="listLink" style={props.style}>
                  <i className="listIcon">{list.icon}</i>
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
