import styled from "styled-components";

export let Wrapper = styled.div`
  width: 250px;
  height: 250px;
  cursor: pointer;
  border-radius: 17px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
`;

Wrapper.Title = styled.div`
  padding-top: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: rgb(0, 0, 0);
`;
Wrapper.Img = styled.img`
  width: 133px;
  height: 192px;
`;
