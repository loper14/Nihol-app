import { Avatar, Modal, Segmented } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLocaleModal } from "../../../redux/modalSlices";
import { Wrapper } from "./style";
import i18next, { changeLanguage } from "i18next";
import { changeLang } from "../../../redux/localeSlice";
import { useTranslation } from "react-i18next";

const LanguageModal = () => {
  let dispatch = useDispatch();
  let { localeModalVisibility } = useSelector((state) => state.modal);
  let { lang } = useSelector((state) => state.locale);
  let { t } = useTranslation();

  let alterlanguage = () => {
    dispatch(switchLocaleModal());
    i18next.changeLanguage(lang);
  };

  return (
    <Modal
      title={t("locale_modal_title")}
      open={localeModalVisibility}
      onOk={() => alterlanguage()}
      onCancel={() => dispatch(switchLocaleModal())}
      okText="Switch"
    >
      <Segmented
        defaultValue={lang}
        block
        options={[
          {
            label: (
              <Wrapper>
                <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png" />
                <div>English</div>
              </Wrapper>
            ),
            value: "en",
          },
          {
            label: (
              <Wrapper>
                <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png" />
                <div>Русский</div>
              </Wrapper>
            ),
            value: "ru",
          },
          {
            label: (
              <Wrapper>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png" />
                <div>O'zbek (lotin) </div>
              </Wrapper>
            ),
            value: "uzLotin",
          },
          {
            label: (
              <Wrapper>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png" />
                <div>Узбек (krill)</div>
              </Wrapper>
            ),
            value: "uzKrill",
          },
        ]}
        onChange={(e) => dispatch(changeLang(e))}
      />
    </Modal>
  );
};

export default LanguageModal;
