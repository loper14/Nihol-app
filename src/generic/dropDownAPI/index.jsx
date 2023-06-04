import { useDispatch } from "react-redux";
import { DropDownItem } from "../style/style";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { setOpenModal, setOpenModal2, setLogout } from "../../redux/slice";

export const useDropDownAPI = () => {
  let dispatch = useDispatch();

  return {
    navbarDropDown: [
      {
        label: (
          <DropDownItem onClick={() => dispatch(setOpenModal(true))}>
            <SettingOutlined style={{ fontSize: "18px" }} />
            Settings
          </DropDownItem>
        ),
      },
      {
        label: (
          <DropDownItem onClick={() => dispatch(setOpenModal2(true))}>
            <TranslationOutlined style={{ fontSize: "18px" }} />
            Change language
          </DropDownItem>
        ),
      },
      {
        type: "divider",
      },
      {
        label: (
          <DropDownItem
            onClick={() => dispatch(setLogout(true))}
            style={{ color: "red" }}
          >
            <LogoutOutlined style={{ fontSize: "18px" }} />
            Log out
          </DropDownItem>
        ),
      },
    ],
  };
};
