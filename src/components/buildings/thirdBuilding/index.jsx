import { Wrapper } from "../secondBuilding/style";
import TitleHandler from "../../../generic/Title";
import { useTranslation } from "react-i18next";
import Mapping from "./mapping";
import { Spin } from "antd";
import useQueryHandler from "../../../hooks/useQuery";
import UserModal from "../common/userModal";
import Adding from "../common/actions/adding/user";
import BookingUser from "../common/actions/adding/bookingUser";

const ThirdBuilding = () => {
  let { t } = useTranslation();
  let { isLoading } = useQueryHandler({
    queryKey: "accomodation/3",
    url: "/accomodation/3/room",
  });

  return (
    <Wrapper>
      <UserModal />
      <Adding />
      <BookingUser />
      <TitleHandler title={t("3 Building")} />
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default ThirdBuilding;
