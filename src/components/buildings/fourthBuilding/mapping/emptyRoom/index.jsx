import { Modal } from "antd";
import { useDispatch } from "react-redux";
import {
  switchAddUserModal,
  switchBookingUserAddModal,
} from "../../../../../redux/modalSlice";
import { Wrapper } from "../../../secondBuilding/style";

const EmptyRoom = () => {
  let { confirm } = Modal;
  let dispatch = useDispatch();
  let clickHandler = () => {
    return confirm({
      title: "Empty place",
      content:
        "This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.",
      okText: "Add",
      cancelText: "Book",
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
