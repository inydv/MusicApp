import React, { useState, useRef, useEffect } from "react";
import "../Css/MusicPlayer.css";
import { FaStepForward, FaStepBackward, FaPlay, FaPause } from "react-icons/fa";

function MusicPlayer({ song, image, spotify_url }) {  // derefrencing

  const [isPlaying, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        {/* <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-love-song-icon-png-image_5273877.jpg" /> */}
        {/* <img src={image} /> */}
      </div>

      <div className="songAttributes">
        <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="metadata" ref={audioPlayer} />
        {/* <audio src={spotify_url} preload="metadata" ref={audioPlayer} /> */}


        <div className="back">
          <i>
            <FaStepBackward />
          </i>
        </div>
        <div className="playPause" onClick={changePlayPause}>
          {isPlaying ? (
            <i>
              <FaPause />
            </i>
          ) : (
            <i>
              <FaPlay />
            </i>
          )}
        </div>
        <div className="forward">
          <i>
            <FaStepForward />
          </i>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
