import { useTranslation } from "react-i18next";
import { DropDownItem } from "../style/style";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSignOut } from "react-auth-kit";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
let { confirm } = Modal;

export const useDropDownAPI = () => {
  let { t } = useTranslation();
  let signOut = useSignOut();
  let navigate = useNavigate();

  let handleLogout = () => {
    confirm({
      title: "Warning!",
      icon: <ExclamationCircleFilled />,
      content: "Are you sure you want to log out?",
      onOk() {
        signOut();
        navigate("/login");
      },
      onCancel() {},
    });
  };

  return {
    navbarDropDown: ({ profileClickHandler, localeClickHandler }) => {
      return [
        {
          label: (
            <DropDownItem onClick={() => profileClickHandler()}>
              <SettingOutlined style={{ fontSize: "18px" }} />
              {t("settings")}
            </DropDownItem>
          ),
        },
        {
          label: (
            <DropDownItem onClick={() => localeClickHandler()}>
              <TranslationOutlined style={{ fontSize: "18px" }} />
              {t("change_language")}
            </DropDownItem>
          ),
        },
        {
          type: "divider",
        },
        {
          label: (
            <DropDownItem
              onClick={() => handleLogout()}
              style={{ color: "red" }}
            >
              <LogoutOutlined style={{ fontSize: "18px" }} />
              {t("log_out")}
            </DropDownItem>
          ),
        },
      ];
    },
  };
};
