import React, { useState, useEffect } from "react";
import "../Css/Home.css";
import LeftMenu from "./LeftMenu";
import MainContainer from "./MainContainer";
import MusicPlayer from "./MusicPlayer";
import UpperMenu from "./UpperMenu";

export default function Home() {

  // const [tracks, settracks] = useState([])

  // const getUsers = async () => {
  //   const response = await fetch(
  //     "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "shazam.p.rapidapi.com",
  //         "x-rapidapi-key":
  //           "3b0f6d6916msh1cdcb957d360d23p1571c7jsne9350a3dcfee",
  //       },
  //     }
  //   );
  //   settracks(await response.json())
  // };

  // useEffect(() => {
  //   getUsers();
  // },[]);

  // console.log(tracks)

  let tracks = [
    {
        "layout": "5",
        "type": "MUSIC",
        "key": "104382921",
        "title": "Ginseng Strip 2002",
        "subtitle": "Yung Lean",
        "share": {
            "subject": "Ginseng Strip 2002 - Yung Lean",
            "text": "I used Shazam to discover Ginseng Strip 2002 by Yung Lean.",
            "href": "https://www.shazam.com/track/104382921/ginseng-strip-2002",
            "image": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
            "twitter": "I used @Shazam to discover Ginseng Strip 2002 by Yung Lean.",
            "html": "https://www.shazam.com/snippets/email-share/104382921?lang=en-US&country=US",
            "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
            "snapchat": "https://www.shazam.com/partner/sc/track/104382921"
        },
        "images": {
            "background": "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
            "coverart": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
            "coverarthq": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
            "joecolor": "b:1e1f24p:fffdffs:9ccb5et:d1d0d3q:83a852"
        },
        "artists": [
            {
                "alias": "yung-lean",
                "id": "42917790",
                "adamid": "472502104"
            }
        ],
        "url": "https://www.shazam.com/track/104382921/ginseng-strip-2002"
    },
    {
        "layout": "5",
        "type": "MUSIC",
        "key": "589545994",
        "title": "Enemy (From the series Arcane League of Legends)",
        "subtitle": "Imagine Dragons, Arcane & League of Legends",
        "share":{
          "subject":"Heat Waves - Glass Animals",
          "text":"I used Shazam to discover Heat Waves by Glass Animals.",
          "href":"https://www.shazam.com/track/514260283/heat-waves",
          "image":"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/da/8b/77/da8b7731-6f4f-eacf-5e74-8b23389eefa1/20UMGIM03371.rgb.jpg/400x400cc.jpg",
          "twitter":"I used @Shazam to discover Heat Waves by Glass Animals.",
          "html":"https://www.shazam.com/snippets/email-share/514260283?lang=en-US&country=US",
          "avatar":"https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/06/b3/09/06b30967-8ba7-2206-79d4-e2011f18d599/pr_source.png/800x800cc.jpg",
          "snapchat":"https://www.shazam.com/partner/sc/track/514260283"
          },
        "artists": [
            {
                "alias": "imagine-dragons",
                "id": "40951653",
                "adamid": "358714030"
            },
            {
                "alias": "jid",
                "id": "205872444",
                "adamid": "282841404"
            },
            {
                "alias": "league-of-legends",
                "id": "200581421",
                "adamid": "960030338"
            }
        ],
        "url": "https://www.shazam.com/track/589545994/enemy-from-the-series-arcane-league-of-legends"
    }
];

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

  const [MainContainerColor, setMainContainerColor] = useState({
    backgroundColor: "rgba(35,36,40,255)",
  })

  const [MainContainerTextColor, setMainContainerTextColor] = useState({
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
    setMainContainerColor({
      backgroundColor: "rgba(207,207,207,255)",
    })
    setMainContainerTextColor({
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
    setMainContainerColor({
      backgroundColor: "rgba(35,36,40,255)",
    })
    setMainContainerTextColor({
      color: "whitesmoke"
    })
  }

  return (
    <div className="home" style={BGColor}>
      <LeftMenu track={tracks}
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

      <MainContainer track={tracks} MainContainerColor={MainContainerColor} MainContainerTextColor={MainContainerTextColor} />

      <MusicPlayer />
    </div>
  );
}
