import React from "react";
import { Wrapper } from "./style";

const Card = ({ title, icon, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Img src={icon} />
    </Wrapper>
  );
};

export default Card;
