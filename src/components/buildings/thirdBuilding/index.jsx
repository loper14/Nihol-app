import React from "react";
import { Wrapper } from "../secondBuilding/style";
import TitleHandler from "../../../generic/Title";
import { useTranslation } from "react-i18next";
import Mapping from "./mapping";
import useAxios from "../../../hooks";
import { useQuery } from "react-query";
import { Spin } from "antd";

const ThirdBuilding = () => {
  let { t } = useTranslation();
  let axios = useAxios();
  let { isLoading } = useQuery(
    "accomodation/3",
    () => {
      return axios({
        url: "/accomodation/3/room",
      });
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Wrapper>
      <TitleHandler title={t("3 Building")} />
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default ThirdBuilding;
