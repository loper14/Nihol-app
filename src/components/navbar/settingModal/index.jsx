import { useDispatch, useSelector } from "react-redux";
import { Avatar, Input, Modal } from "antd";
import { SettingText, VersionText } from "./style";
import { switchProfileModal } from "../../../redux/modalSlices";
import { useTranslation } from "react-i18next";

const SettingModal = () => {
  let dispatch = useDispatch();
  let { profileModalVisibility } = useSelector((state) => state.modal);
  let { t } = useTranslation();

  return (
    <Modal
      title={t("setting_modal_title")}
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
      <SettingText>{t("setting_modal_name")}</SettingText>
      <Input disabled />
      <SettingText>{t("setting_modal_surname")}</SettingText>
      <Input disabled />

      <VersionText>Nihol 0.0.1 version</VersionText>
    </Modal>
  );
};

export default SettingModal;
