import { Wrapper } from "../secondBuilding/style";
import TitleHandler from "../../../generic/Title";
import Mapping from "./mapping";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";
import useQueryHandler from "../../../hooks/useQuery";
import UserModal from "../common/userModal";
import Adding from "../common/actions/adding/user";
import BookingUser from "../common/actions/adding/bookingUser";

const FourthBuilding = () => {
  let { t } = useTranslation();
  let { isLoading } = useQueryHandler({
    queryKey: "accomodation/4",
    url: "/accomodation/4/room",
  });

  return (
    <Wrapper>
      <UserModal />
      <Adding />
      <BookingUser />
      <TitleHandler title={t("4 Building")} />
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default FourthBuilding;
