import React from "react";
import { Wrapper } from "./style";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      <Result
        status={404}
        extra={
          <>
            <Wrapper.NotFound>404</Wrapper.NotFound>
            <Wrapper.NotFoundText>
              Kechirasiz, siz tashrif buyurgan sayt mavjud emas.
            </Wrapper.NotFoundText>
            <Button type="primary" onClick={() => navigate("/")}>
              Asosiy bo'lim
            </Button>
          </>
        }
      />
    </Wrapper>
  );
};

export default NotFound;
