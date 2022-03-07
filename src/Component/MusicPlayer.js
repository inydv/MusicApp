import React, { useState, useRef, useEffect } from "react";
import "../Css/MusicPlayer.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsFillSkipForwardFill, BsFillSkipBackwardFill } from "react-icons/bs";

function MusicPlayer({ ComponentBGColor, ComponentTextColor, song, imgSrc }) {
  const [isPlaying, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef();

  const [Songs, setSongs] = useState(song);

  useEffect(() => {
    setSongs(song);
    setPlay(false);
  }, [song]);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  });

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

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

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const back = () => {
    progressBar.current.value = Number(progressBar.current.value - 5);
    changeProgress();
  };

  const forward = () => {
    progressBar.current.value = progressBar.current.value + 1;
    changeProgress();
    console.log(progressBar.current.value);
  };

  return (
    <div className="musicPlayer" style={ComponentBGColor}>
      <div className="songImage">
        <img src={imgSrc} />
      </div>

      <div className="songAttributes" style={ComponentTextColor}>
        <audio src={Songs} ref={audioPlayer} />
        <div className="top">
          <div className="back">
            <i>
              <BsFillSkipBackwardFill onClick={back} />
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
              <BsFillSkipForwardFill onClick={forward} />
            </i>
          </div>
        </div>

        {calculateTime(duration) == "Infinity : NaN" ? (
          <div className="bottom" ref={progressBar}>
            <div className="currentTime">--:--</div>
            <input
              type="range"
              className="progressBar"
              defaultValue="0"
              onChange={changeProgress}
            />
            <div className="duration">--:--</div>
          </div>
        ) : (
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
              {duration && calculateTime(duration)
                ? duration && calculateTime(duration)
                : "00:00"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MusicPlayer;
