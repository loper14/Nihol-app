import React from "react";
import TitleHandler from "../../../generic/Title";
import { ordinaryRoomsCardData } from "../../../mock/cardData";
import Card from "../../../generic/card";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CardWrapper } from "../../../generic/style/style";

const OrdinaryRooms = () => {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  let { t } = useTranslation();
  let hasOutlet = useOutlet();
  return !hasOutlet ? (
    <>
      <TitleHandler title={t("ordinary_rooms_title")} />
      <CardWrapper>
        {ordinaryRoomsCardData.map(({ title, path, icon }, index) => (
          <Card
            key={index}
            title={t(title)}
            icon={icon}
            onClick={() => navigate(`${pathname}${path}`)}
          />
        ))}
      </CardWrapper>
    </>
  ) : (
    <Outlet />
  );
};

export default OrdinaryRooms;
