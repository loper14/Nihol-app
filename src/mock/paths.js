import Home from "../components/home";
import AllUsers from "../components/allUsers";
import HalfTime from "../components/halfTime";
import TimeUp from "../components/timeUp";
import EmptyPlaces from "../components/emptyPlaces";
import Report from "../components/report";
import OrdinaryRooms from "../components/buildingTypes/ordinaryRooms";
import LuxuryRooms from "../components/buildingTypes/luxuryRooms";
import Cottages from "../components/buildingTypes/cottages";

export let paths = [
  {
    id: 0,
    path: "/",
    element: <Home />,
  },
  {
    id: 1,
    path: "/all-users",
    element: <AllUsers />,
  },
  {
    id: 2,
    path: "/middle-users",
    element: <HalfTime />,
  },
  {
    id: 3,
    path: "/end-users",
    element: <TimeUp />,
  },
  {
    id: 4,
    path: "/building-control",
    element: <EmptyPlaces />,
    hasChild: true,
    children: [
      {
        id: "4-1",
        path: "ordinary-rooms",
        element: <OrdinaryRooms />,
      },
      {
        id: "4-2",
        path: "luxury-rooms",
        element: <LuxuryRooms />,
      },
      {
        id: "4-3",
        path: "cottage",
        element: <Cottages />,
      },
    ],
  },
  {
    id: 5,
    path: "/report",
    element: <Report />,
  },
];
