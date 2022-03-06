import React, { useState } from "react";
import "../Css/Home.css";
import LeftMenu from "./LeftMenu";
import MainContainer from "./MainContainer";
import MusicPlayer from "./MusicPlayer";
import UpperMenu from "./UpperMenu";
import { Radio } from "./Radio";
import { tracks } from "./Music";

export default function Home() {
  const [BGColor, setBGColor] = useState({
    backgroundColor: "rgba(26,25,30,255)",
  });

  const [ComponentBGColor, setComponentBGColor] = useState({
    backgroundColor: "rgba(35,36,40,255)",
  });

  const [LogoColor, setLogoColor] = useState({
    color: "whitesmoke",
    textShadow: "5px 10px 10px whitesmoke",
  });

  const [ComponentTextColor, setComponentTextColor] = useState({
    color: "whitesmoke",
  });

  const [ModeBGColor, setModeBGColor] = useState({
    backgroundColor: "rgba(26,25,30,255)",
    color: "whitesmoke",
  });

  const [DarkModeColor, setDarkModeColor] = useState({
    color: "darkgreen",
  });

  const [LightModeColor, setLightModeColor] = useState({
    color: "whitesmoke",
  });

  function HomeLightMode() {
    setBGColor({
      backgroundColor: "rgba(237,237,237,255)",
    });
    setComponentBGColor({
      backgroundColor: "rgba(207,207,207,255)",
    });
    setLogoColor({
      color: "black",
      textShadow: "5px 10px 10px black",
    });
    setComponentTextColor({
      color: "black",
    });
    setModeBGColor({
      backgroundColor: "rgba(237,237,237,255)",
    });
    setDarkModeColor({
      color: "black",
    });
    setLightModeColor({
      color: "darkgreen",
    });
  }

  function HomeDarkMode() {
    setBGColor({
      backgroundColor: "rgba(26,25,30,255)",
    });
    setComponentBGColor({
      backgroundColor: "rgba(35,36,40,255)",
    });
    setLogoColor({
      color: "whitesmoke",
      textShadow: "5px 10px 10px whitesmoke",
    });
    setComponentTextColor({
      color: "whitesmoke",
    });
    setModeBGColor({
      backgroundColor: "rgba(26,25,30,255)",
    });
    setDarkModeColor({
      color: "darkgreen",
    });
    setLightModeColor({
      color: "whitesmoke",
    });
  }

  const [songs, setSongs] = useState(tracks);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  const setMainSong = (songSrc, image) => {
    setSong(songSrc);
    setImage(image);
    setAuto(true);
  };

  return (
    <div className="home" style={BGColor}>
      <LeftMenu
        Radio={Radio}
        HomeLightMode={HomeLightMode}
        HomeDarkMode={HomeDarkMode}
        ComponentBGColor={ComponentBGColor}
        LogoColor={LogoColor}
        ComponentTextColor={ComponentTextColor}
        ModeBGColor={ModeBGColor}
        DarkModeColor={DarkModeColor}
        LightModeColor={LightModeColor}
      />

      <UpperMenu ComponentTextColor={ComponentTextColor} />

      <MainContainer
        songs={songs}
        setMainSong={setMainSong}
        ComponentBGColor={ComponentBGColor}
        ComponentTextColor={ComponentTextColor}
      />

      <MusicPlayer
        song={song}
        imgSrc={img}
        autoplay={auto}
        ComponentBGColor={ComponentBGColor}
        ComponentTextColor={ComponentTextColor}
      />
    </div>
  );
}
