import { Wrapper } from "./style";
import Card from "../../generic/card";
import { cardData } from "../../mock/cardData";
import { Title } from "../../generic/style/style";
import { useNavigate } from "react-router-dom";
import report from "../../assets/imgs/report.svg";
import TitleHandler from "../../generic/Title";
import { useTranslation } from "react-i18next";

const Home = () => {
  let navigate = useNavigate();
  let { t } = useTranslation();
  return (
    <>
      <TitleHandler title={t("home_title")} showBackIcon={false} />
      <Wrapper>
        {cardData.map((value, index) => (
          <Card
            title={t(value.title)}
            icon={value.icon}
            key={index}
            onClick={() => navigate(value.path)}
          />
        ))}
      </Wrapper>
      <Title>{t("reports")}</Title>
      <Wrapper isReportCard={true}>
        <Card
          title={t("report")}
          icon={report}
          onClick={() => navigate("/report")}
        />
      </Wrapper>
    </>
  );
};

export default Home;
