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
Wrapper.Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
Wrapper.Img = styled.img`
  width: 30px;
  height: 25px;
`;
Wrapper.Title = styled.div`
  font-weight: 700;
`;
Wrapper.Avatar = styled(Avatar)`
  cursor: pointer;
`;
