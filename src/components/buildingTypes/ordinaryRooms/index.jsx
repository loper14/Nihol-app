import React from "react";
import TitleHandler from "../../../generic/Title";
import { Wrapper } from "../../emptyPlaces/style";
import { ordinaryRoomsCardData } from "../../../mock/cardData";
import Card from "../../../generic/card";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OrdinaryRooms = () => {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  let { t } = useTranslation();
  return (
    <>
      <TitleHandler title={t("ordinary_rooms_title")} />
      <Wrapper>
        {ordinaryRoomsCardData.map(({ title, path, icon }, index) => (
          <Card
            key={index}
            title={t(title)}
            icon={icon}
            onClick={() => navigate(`${pathname}${path}`)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default OrdinaryRooms;
