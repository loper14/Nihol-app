import TitleHandler from "../../../generic/Title";
import Card from "../../../generic/card";
import room from "../../../assets/imgs/room.svg";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CardWrapper } from "../../../generic/style/style";

const LuxuryRooms = () => {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  let { t } = useTranslation();
  let hasOutlet = useOutlet();
  return !hasOutlet ? (
    <>
      <TitleHandler title={t("luxury_rooms_title")} />
      <CardWrapper>
        <Card
          title={t("3 Building")}
          icon={room}
          onClick={() => navigate(`${pathname}/3`)}
        />
        <Card
          title={t("5 Building")}
          icon={room}
          onClick={() => navigate(`${pathname}/5`)}
        />
      </CardWrapper>
    </>
  ) : (
    <Outlet />
  );
};

export default LuxuryRooms;
