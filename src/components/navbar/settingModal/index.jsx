import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../../redux/slice";
import { Avatar, Input, Modal } from "antd";
import { SettingText, VersionText } from "./style";

const SettingModal = () => {
  let dispatch = useDispatch();
  let { openModal } = useSelector((state) => state.modal);

  return (
    <Modal
      title="Profile"
      open={openModal}
      onOk={() => dispatch(setOpenModal(false))}
      onCancel={() => dispatch(setOpenModal(false))}
      okButtonProps={{ disabled: true }}
    >
      <Avatar
        style={{
          backgroundColor: "orange",
          verticalAlign: "middle",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          margin: "auto",
        }}
      >
        A
      </Avatar>
      <SettingText>Name:</SettingText>
      <Input disabled />
      <SettingText>Surname:</SettingText>
      <Input disabled />

      <VersionText>Nihol 0.0.1 version</VersionText>
    </Modal>
  );
};

export default SettingModal;
