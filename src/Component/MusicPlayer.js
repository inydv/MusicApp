import React, { useState, useRef, useEffect } from "react";
import "../Css/MusicPlayer.css";
import { FaStepForward, FaStepBackward, FaPlay, FaPause } from "react-icons/fa";

function MusicPlayer() {
  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-love-song-icon-png-image_5273877.jpg" />
      </div>

      <div className="songAttributes">
        <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />

        <div className="back">
          <i>
            <FaStepBackward />
          </i>
        </div>
        <div className="playPause">
          <i>
            <FaPause />
          </i>
          <i>
            <FaPlay />
          </i>
        </div>
        <div className="forward">
          <i>
            <FaStepForward />
          </i>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
