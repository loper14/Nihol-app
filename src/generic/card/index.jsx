import React from "react";
import { Wrapper } from "./style";

const Card = ({ title, icon }) => {
  return (
    <Wrapper>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Icon>{icon}</Wrapper.Icon>
    </Wrapper>
  );
};

export default Card;
