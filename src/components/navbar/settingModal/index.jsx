import { useDispatch, useSelector } from "react-redux";
import { Avatar, Input, Modal } from "antd";
import { SettingText, VersionText } from "./style";
import { switchProfileModal } from "../../../redux/modalSlices";

const SettingModal = () => {
  let dispatch = useDispatch();
  let { profileModalVisibility } = useSelector((state) => state.modal);

  return (
    <Modal
      title="Profile"
      open={profileModalVisibility}
      onOk={() => dispatch(switchProfileModal())}
      onCancel={() => dispatch(switchProfileModal())}
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
