import React from "react";
import { Title } from "../style/style";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export let Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 5px;
`;

const TitleHandler = ({ title = "Not provided", showBackIcon = true }) => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      {showBackIcon && (
        <LeftOutlined
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer", fontSize: "32px" }}
        />
      )}
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default TitleHandler;
