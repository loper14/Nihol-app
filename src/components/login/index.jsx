import React, { useRef, useState } from "react";
import { Wrapper } from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import UseNotificationAPI from "../../generic/NotificationAPI";
import useAxios from "../../hooks";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [loading, setLoading] = useState(false);
  let phoneNumber = useRef();
  let password = useRef();
  let notifier = UseNotificationAPI();
  let axios = useAxios();
  let signIn = useSignIn();
  let navigate = useNavigate();

  let onAuth = () => {
    if (loading) return;
    if (!phoneNumber.current.input.value || !password.current.input.value)
      return notifier("empty");

    let userData = {
      phoneNumber: `+998${phoneNumber.current.input.value}`,
      password: password.current.input.value,
    };
    setLoading(true);
    axios({
      url: `/user/sign-in`,
      method: "POST",
      data: { ...userData },
    })
      .then((res) => {
        let { token, user } = res.data.data;
        localStorage.setItem("token", token);
        signIn({
          token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: user,
        });
        navigate("/");
      })
      .catch((res) => {
        setLoading(false);
        let response = res.response;
        notifier(response.status);
      });
  };
  let keyDown = (e) => {
    if (e.key === "Enter" || e.type === "click" || e.keyCode === 13) onAuth();
  };

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Text>
          Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.
        </Wrapper.Text>
        <Wrapper.Input
          ref={phoneNumber}
          name="phoneNumber"
          bordered={false}
          addonBefore="+998"
        />
        <Wrapper.InputPassword
          ref={password}
          name="password"
          placeholder="Parol"
          onKeyDown={keyDown}
        />
        <Wrapper.Button onClick={keyDown}>
          {loading ? <LoadingOutlined /> : "Login"}
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
