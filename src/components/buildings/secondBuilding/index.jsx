import TitleHandler from "../../../generic/Title";
import Mapping from "./mapping";
import { Wrapper } from "./style";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import useQueryHandler from "../../../hooks/useQuery";
import UserModal from "../common/userModal";
import Adding from "../common/actions/adding/user";
import BookingUser from "../common/actions/adding/bookingUser";

const SecondBuilding = () => {
  let { t } = useTranslation();
  let { isLoading } = useQueryHandler({
    queryKey: "accomodation/2",
    url: "/accomodation/2/room",
  });

  return (
    <Wrapper>
      <UserModal />
      <Adding />
      <BookingUser /> <TitleHandler title={t("2 Building")} />
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default SecondBuilding;
