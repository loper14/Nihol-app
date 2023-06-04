import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { setLogout } from "../../../redux/slice";

const LogoutModal = () => {
  let { isLogout } = useSelector((state) => state.modal);
  let navigate = useNavigate();
  let signOut = useSignOut();
  let dispatch = useDispatch();

  const handleOk = () => {
    signOut();
    navigate("/login");
    dispatch(setLogout(false));
  };
  const handleCancel = () => {
    dispatch(setLogout(false));
  };

  const confirmModal = (
    <Modal
      title="Warning"
      content="Some descriptions"
      onOk={handleOk}
      open={isLogout}
      onCancel={handleCancel}
      okButtonProps={{ danger: true }}
      width={400}
    >
      Are you sure?
    </Modal>
  );

  return <div>{isLogout && confirmModal}</div>;
};
export default LogoutModal;
