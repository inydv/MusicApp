import React, { useState } from "react";
import "../Css/Home.css";
import LeftMenu from "./LeftMenu";
import MainContainer from "./MainContainer";
import MusicPlayer from "./MusicPlayer";
import UpperMenu from "./UpperMenu";

export default function Home() {
  const [BGColor, setBGColor] = useState({
    backgroundColor: "rgba(26,25,30,255)",
  });

  const [LeftMenuBGColor, setLeftMenuBGColor] = useState({
    backgroundColor: "rgba(35,36,40,255)",
  });

  const [LeftMenuLogoColor, setLeftMenuLogoColor] = useState({
    color: "whitesmoke",
    textShadow: "5px 10px 10px whitesmoke",
  });

  const [LeftMenuTextColor, setLeftMenuTextColor] = useState({
    color: "whitesmoke",
  });

  const [ModeBGColor, setModeBGColor] = useState({
    backgroundColor: "rgba(26,25,30,255)",
    color: "whitesmoke"
  })

  const [DarkModeColor, setDarkModeColor] = useState({
    color: "darkgreen"
  })

  const [LightModeColor, setLightModeColor] = useState({
    color: "whitesmoke"
  })

  const [UpperMenuColor, setUpperMenuColor] = useState({
    color: "whitesmoke"
  })

  function HomeLightMode() {
    setBGColor({
      backgroundColor: "rgba(237,237,237,255)",
    });
    setLeftMenuBGColor({
      backgroundColor: "rgba(207,207,207,255)",
    });
    setLeftMenuLogoColor({
      color: "black",
      textShadow: "5px 10px 10px black",
    });
    setLeftMenuTextColor({
      color: "black",
    });
    setModeBGColor({
      backgroundColor: "rgba(237,237,237,255)",
    })
    setDarkModeColor({
      color: "black"
    })
    setLightModeColor({
      color: "darkgreen"
    })
    setUpperMenuColor({
      color: "black"
    })
  }

  function HomeDarkMode() {
    setBGColor({
      backgroundColor: "rgba(26,25,30,255)",
    });
    setLeftMenuBGColor({
      backgroundColor: "rgba(35,36,40,255)",
    });
    setLeftMenuLogoColor({
      color: "whitesmoke",
      textShadow: "5px 10px 10px whitesmoke",
    });
    setLeftMenuTextColor({
      color: "whitesmoke",
    });
    setModeBGColor({
      backgroundColor: "rgba(26,25,30,255)",
    })
    setDarkModeColor({
      color: "darkgreen"
    })
    setLightModeColor({
      color: "whitesmoke"
    })
    setUpperMenuColor({
      color: "whitesmoke"
    })
  }

  return (
    <div className="home" style={BGColor}>
      <LeftMenu
        HomeLightMode={HomeLightMode}
        HomeDarkMode={HomeDarkMode}
        LeftMenuBGColor={LeftMenuBGColor}
        LeftMenuLogoColor={LeftMenuLogoColor}
        LeftMenuTextColor={LeftMenuTextColor}
        ModeBGColor={ModeBGColor}
        DarkModeColor={DarkModeColor}
        LightModeColor={LightModeColor}
      />

      <UpperMenu UpperMenuColor={UpperMenuColor} />

      <MainContainer />

      <MusicPlayer />
    </div>
  );
}
