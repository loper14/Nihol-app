import TitleHandler from "../../../generic/Title";
import Mapping from "./mapping";
import { Wrapper } from "./style";
import useAxios from "../../../hooks";
import { Spin } from "antd";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

const SecondBuilding = () => {
  let axios = useAxios();
  let { t } = useTranslation();
  let { isLoading } = useQuery(
    "accomodation/2",
    () => {
      return axios({
        url: "/accomodation/2/room",
      });
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Wrapper>
      <TitleHandler title={t("2 Building")} />
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default SecondBuilding;
