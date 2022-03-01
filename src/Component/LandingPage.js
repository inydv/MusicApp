import React from "react";
import "../Css/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="bg"></div>

      <div className="logo">
        <h1>DROP BROS</h1>
      </div>

      <div className="btn">
        <Link exact to="/Home" className="startBtn">
          START
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
