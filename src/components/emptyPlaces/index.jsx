import React from "react";
import Card from "../../generic/card";
import { Wrapper } from "./style";
import styled from "styled-components";
import TitleHandler from "../../generic/Title";
import { emptyPlaceCardData } from "../../mock/cardData";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export let Img = styled.img``;

const EmptyPlaces = () => {
  let navigate = useNavigate();
  let hasOutlet = useOutlet();
  let { t } = useTranslation();
  let { pathname } = useLocation();
  return !hasOutlet ? (
    <>
      <TitleHandler title={t("building_types")} />
      <Wrapper>
        {emptyPlaceCardData.map(({ title, icon, path }, index) => (
          <Card
            key={index}
            title={t(title)}
            icon={icon}
            onClick={() => navigate(`${pathname}${path}`)}
          />
        ))}
      </Wrapper>
    </>
  ) : (
    <Outlet />
  );
};

export default EmptyPlaces;
