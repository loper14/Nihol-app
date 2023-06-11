import { Wrapper } from "./style";
import Home from "../home";
import { Dropdown } from "antd";
import { useDropDownAPI } from "../../generic/dropDownAPI";
import SettingModal from "./settingModal";
import LanguageModal from "./languageModal";
import { useDispatch } from "react-redux";
import { switchLocaleModal, switchProfileModal } from "../../redux/modalSlices";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  let { navbarDropDown } = useDropDownAPI();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <>
      <SettingModal />
      <LanguageModal />
      <Wrapper>
        <Wrapper.Title onClick={() => navigate("/")}>NIHOL</Wrapper.Title>
        <Dropdown
          menu={{
            items: navbarDropDown({
              profileClickHandler: () => {
                dispatch(switchProfileModal());
              },
              localeClickHandler: () => {
                dispatch(switchLocaleModal());
              },
            }),
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
      <Outlet />
    </>
  );
};

export default Navbar;
