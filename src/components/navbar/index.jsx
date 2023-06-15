import { Wrapper } from "./style";
import { Dropdown } from "antd";
import { useDropDownAPI } from "../../generic/dropDownAPI";
import SettingModal from "./settingModal";
import LanguageModal from "./languageModal";
import { useDispatch } from "react-redux";
import { switchLocaleModal, switchProfileModal } from "../../redux/modalSlices";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
const Navbar = () => {
  let { navbarDropDown } = useDropDownAPI();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let auth = useAuthUser();

  return (
    <>
      <SettingModal />
      <LanguageModal />
      <Wrapper>
        <Wrapper.Logo onClick={() => navigate("/")}>
          <Wrapper.Img
            src="https://smhospital.org.in/wp-content/uploads/2023/01/SM-Hospital-Logo-Symbol-1.svg"
            alt=""
          />
          <Wrapper.Title>NIHOL</Wrapper.Title>
        </Wrapper.Logo>
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
            {auth().name[0]}
          </Wrapper.Avatar>
        </Dropdown>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
