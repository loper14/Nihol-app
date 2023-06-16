import allUsers from "../assets/imgs/all_users.svg";
import halfTime from "../assets/imgs/half_time.svg";
import endTime from "../assets/imgs/end_time.svg";
import emptyPlace from "../assets/imgs/empty_place.svg";
import ordinaryRoom from "../assets/imgs/ordinary_room.svg";
import luxuryRoom from "../assets/imgs/luxury_room.svg";
import cottages from "../assets/imgs/mansion.svg";
import room from "../assets/imgs/room.svg";

export let cardData = [
  {
    title: "All Users",
    icon: allUsers,
    path: "/all-users",
  },
  {
    title: "Half Time",
    icon: halfTime,
    path: "/middle-users",
  },
  {
    title: "Time Up",
    icon: endTime,
    path: "/end-users",
  },
  {
    title: "Empty Places",
    icon: emptyPlace,
    path: "/building-control",
  },
];
export let emptyPlaceCardData = [
  {
    title: "Ordinary Room",
    icon: ordinaryRoom,
    path: "/ordinary-rooms",
  },
  {
    title: "Luxury Room",
    icon: luxuryRoom,
    path: "/luxury-rooms",
  },
  {
    title: "Cottages",
    icon: cottages,
    path: "/cottage",
  },
];
export let ordinaryRoomsCardData = [
  {
    title: "2 Building",
    icon: room,
    path: "/2",
  },
  {
    title: "4 Building",
    icon: room,
    path: "/4",
  },
  {
    title: "6 Building",
    icon: room,
    path: "/6",
  },
];
