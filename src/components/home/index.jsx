import React from "react";
import { Wrapper } from "./style";
import Card from "../../generic/card";
import { cardData } from "../../mock/cardData";
import { Title } from "../../generic/style/style";
import { DatabaseOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <>
      <Title>Sections</Title>
      <Wrapper>
        {cardData.map((value, index) => (
          <Card title={value.title} icon={value.icon} key={index} />
        ))}
      </Wrapper>
      <Title>Reports</Title>
      <Wrapper isReportCard={true}>
        <Card
          title="Report"
          icon={<DatabaseOutlined style={{ fontSize: "105px" }} />}
        />
      </Wrapper>
    </>
  );
};

export default Home;
