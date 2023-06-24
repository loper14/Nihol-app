import { Modal } from "antd";
import { Wrapper } from "../../style";
import { useDispatch } from "react-redux";
import {
  switchAddUserModal,
  switchBookingUserAddModal,
} from "../../../../../redux/modalSlice";
import { useTranslation } from "react-i18next";

const EmptyRoom = () => {
  let { confirm } = Modal;
  let dispatch = useDispatch();
  let { t } = useTranslation();
  let clickHandler = () => {
    return confirm({
      title: t("warning_title"),
      content: t("warning_description"),
      okText: t("add_btn"),
      cancelText: t("book_btn"),
      closable: true,
      onOk: () => {
        dispatch(switchAddUserModal());
        Modal.destroyAll();
      },
      onCancel: () => {
        dispatch(switchBookingUserAddModal());
        Modal.destroyAll();
      },
    });
  };

  return <Wrapper.Room color="green" onClick={clickHandler} />;
};

export default EmptyRoom;
