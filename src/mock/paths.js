import Home from "../components/home";
import AllUsers from "../components/allUsers";
import HalfTime from "../components/halfTime";
import TimeUp from "../components/timeUp";
import EmptyPlaces from "../components/buildingTypes";
import Report from "../components/report";
import OrdinaryRooms from "../components/buildingTypes/ordinaryRooms";
import LuxuryRooms from "../components/buildingTypes/luxuryRooms";
import Cottages from "../components/buildingTypes/cottages";
import SecondBuilding from "../components/buildings/secondBuilding";
import FourthBuilding from "../components/buildings/fourthBuilding";
import ThirdBuilding from "../components/buildings/thirdBuilding";

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
        hasChild: true,
        element: <OrdinaryRooms />,
        children: [
          {
            id: "4-1-1",
            path: "2",
            element: <SecondBuilding />,
          },

          {
            id: "4-1-2",
            path: "4",
            element: <FourthBuilding />,
          },
        ],
      },
      {
        id: "4-2",
        path: "luxury-rooms",
        element: <LuxuryRooms />,
        hasChild: true,
        children: [
          {
            id: "4-2-1",
            path: "3",
            element: <ThirdBuilding />,
          },
        ],
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
