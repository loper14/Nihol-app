import React from "react";
import { Wrapper } from "../secondBuilding/style";
import TitleHandler from "../../../generic/Title";
import Mapping from "./mapping";
import useAxios from "../../../hooks";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { Spin } from "antd";

const FourthBuilding = () => {
  let axios = useAxios();
  let { t } = useTranslation();
  let { isLoading } = useQuery(
    "accomodation/4",
    () => {
      return axios({
        url: "/accomodation/4/room",
      });
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Wrapper>
      <TitleHandler title={t("4 Building")} />
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default FourthBuilding;
