import React from "react";
import TitleHandler from "../../../generic/Title";
import { Wrapper } from "../../emptyPlaces/style";
import { ordinaryRoomsCardData } from "../../../mock/cardData";
import Card from "../../../generic/card";
import { useLocation, useNavigate } from "react-router-dom";

const OrdinaryRooms = () => {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  return (
    <>
      <TitleHandler title="Ordinary Rooms" />
      <Wrapper>
        {ordinaryRoomsCardData.map(({ title, path, icon }, index) => (
          <Card
            key={index}
            title={title}
            icon={icon}
            onClick={() => navigate(`${pathname}${path}`)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default OrdinaryRooms;
