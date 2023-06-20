import TitleHandler from "../../../generic/Title";
import { useTranslation } from "react-i18next";

const Cottages = () => {
  let { t } = useTranslation();
  return (
    <>
      <TitleHandler title={t("cottages_title")} />
    </>
  );
};

export default Cottages;
