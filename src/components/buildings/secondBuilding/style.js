import { Tag } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
Wrapper.MainCardWrapper = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 10px;
`;
Wrapper.CardWrapper = styled.div`
  display: flex;
  /* width: 290px; */
  -moz-box-align: center;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  padding: 20px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
`;
Wrapper.RoomsWrapper = styled.div`
  width: 290px;
  display: flex;
  flex-wrap: wrap;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  gap: 20px;
`;
Wrapper.RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  border: 1px solid rgb(147, 149, 150);
  border-radius: 12px;
`;

Wrapper.RoomTitle = styled.div`
  padding-top: 10px;
`;
Wrapper.ClienteWrapper = styled.div`
  margin: 10px auto;
  width: 120px;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  -moz-box-align: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

Wrapper.Room = styled(Tag)`
  position: relative;
  margin: 0px;
  cursor: pointer;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;
Wrapper.InfoRoom = styled(Tag)`
  cursor: pointer;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -15px;
`;
