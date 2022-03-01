import {RiPlayListFill} from 'react-icons/ri'
import {BsFillSuitHeartFill,BsClock,BsPersonLinesFill} from 'react-icons/bs'
import {IoAlbums} from 'react-icons/io5'

const CollectionsList = [
    {
        id: 1,
        icon: <RiPlayListFill />,
        name: "My PlayList"
    },
    {
        id: 2,
        icon: <BsFillSuitHeartFill />,
        name: "Favourite"
    },
    {
        id: 3,
        icon: <BsClock />,
        name: "Recently Played"
    },
    {
        id: 4,
        icon: <IoAlbums />,
        name: "Album"
    },
    {
        id: 5,
        icon: <BsPersonLinesFill />,
        name: "Artists"
    },
]

export { CollectionsList }