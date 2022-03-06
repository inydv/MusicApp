// const [tracks, settracks] = useState([])

// const getUsers = async () => {
//   const response = await fetch("https://lyrics-plus.p.rapidapi.com/browse/new-releases", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "lyrics-plus.p.rapidapi.com",
//       "x-rapidapi-key": "3b0f6d6916msh1cdcb957d360d23p1571c7jsne9350a3dcfee"
//     }
//   })
//   settracks(await response.json())
// };

// useEffect(() => {
//   getUsers();
// },[]);

let tracks = [
  {
    artists: [
      {
        name: "Faustix",
        type: "artist",
      },
      {
        name: "LIZZY",
        type: "artist",
      },
      {
        name: "MAYLYN",
        type: "artist",
      },
    ],
    type: "single",
    song: "Secrets (feat. MAYLYN)",
    image: "https://i.scdn.co/image/ab67616d0000b2732c46d5e52bf5ea00a72e7353",
    spotify_url: "https://open.spotify.com/album/7bHPY3KOl44SXIf7rsRmlq",
  },
  {
    artists: [
      {
        name: "Sandro Cavazza",
        type: "artist",
      },
    ],
    type: "single",
    song: "The Days",
    image: "https://i.scdn.co/image/ab67616d0000b2737aef189702aac52da26d4c9c",
    spotify_url: "https://open.spotify.com/album/4dLgdo7d2lTiVnK4Fzk3Zu",
  },
  {
    artists: [
      {
        name: "Cheat Codes",
        type: "artist",
      },
      {
        name: "Icona Pop",
        type: "artist",
      },
    ],
    type: "single",
    song: "Payback (feat. Icona Pop)",
    image: "https://i.scdn.co/image/ab67616d0000b273dd22d7c43aa6aa2593829d48",
    spotify_url: "https://open.spotify.com/album/7xerYbkUGD5BazNdP6OaZW",
  },
];

export { tracks };
