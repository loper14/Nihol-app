import { Avatar } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div`
  background: rgb(255, 255, 255);
  width: 100%;
  padding: 0px 11%;
  height: 70px;
  margin: auto;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
`;

Wrapper.Title = styled.div`
  cursor: pointer;
`;
Wrapper.Avatar = styled(Avatar)`
  cursor: pointer;
`;
