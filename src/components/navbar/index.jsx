import { Wrapper } from "./style";
import Home from "../home";
import { Dropdown } from "antd";
import { useDropDownAPI } from "../../generic/dropDownAPI";
import SettingModal from "./settingModal";
import LanguageModal from "./languageModal";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import { ExclamationCircleFilled } from "@ant-design/icons";
import LogoutModal from "./logoutModal";
let { confirm } = Modal;

const Navbar = () => {
  let { navbarDropDown } = useDropDownAPI();
  // let { isLogout } = useSelector((state) => state.modal);
  // let navigate = useNavigate();
  // let signOut = useSignOut();

  // isLogout &&
  //   confirm({
  //     title: "Do you Want to delete these items?",
  //     icon: <ExclamationCircleFilled />,
  //     content: "Some descriptions",
  //     onOk() {
  //       signOut();
  //       navigate("/login");
  //     },
  //   });

  return (
    <>
      <LogoutModal />
      <SettingModal />
      <LanguageModal />
      <Wrapper>
        <Wrapper.Title>NIHOL</Wrapper.Title>
        <Dropdown
          menu={{
            items: navbarDropDown,
          }}
          trigger={["click"]}
        >
          <Wrapper.Avatar
            style={{
              backgroundColor: "orange",
              verticalAlign: "middle",
            }}
          >
            A
          </Wrapper.Avatar>
        </Dropdown>
      </Wrapper>
      <Home />
    </>
  );
};

export default Navbar;
