import { Result } from "antd";
import { useTranslation } from "react-i18next";

const BookedEmptyUi = () => {
  let { t } = useTranslation();
  return <Result status={404} extra={t("booked_empty")} />;
};

export default BookedEmptyUi;
