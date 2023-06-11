import React from "react";
import TitleHandler from "../../../generic/Title";
import { Wrapper } from "../../emptyPlaces/style";
import Card from "../../../generic/card";
import ordImg from "../../../assets/imgs/ordinary_room.svg";
import { useLocation, useNavigate } from "react-router-dom";

const LuxuryRooms = () => {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  return (
    <>
      <TitleHandler title="Luxury Rooms" />
      <Wrapper>
        <Card
          title="3 Building"
          icon={ordImg}
          onClick={() => navigate(`${pathname}/3`)}
        />
        <Card
          title="5 Building"
          icon={ordImg}
          onClick={() => navigate(`${pathname}/5`)}
        />
      </Wrapper>
    </>
  );
};

export default LuxuryRooms;
