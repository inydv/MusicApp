import React, { Component } from "react";
import "../Css/LandingPage.css";
import {Link} from "react-router-dom"

class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div className="bg"></div>

        <div className="logo">
          <h1>DROP BROS</h1>
        </div>

        <div className="btn">
            {/* <Link to={"/home"} className="startBtn">START</Link> */}
            <a className="startBtn">START</a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
