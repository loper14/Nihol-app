import { useTranslation } from "react-i18next";
import { DropDownItem } from "../style/style";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const useDropDownAPI = () => {
  let { t } = useTranslation();
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
            <DropDownItem style={{ color: "red" }}>
              <LogoutOutlined style={{ fontSize: "18px" }} />
              {t("log_out")}
            </DropDownItem>
          ),
        },
      ];
    },
  };
};
