import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal2 } from "../../../redux/slice";

const LanguageModal = () => {
  let dispatch = useDispatch();
  let { openModal2 } = useSelector((state) => state.modal);
  return (
    <Modal
      title="Change language"
      open={openModal2}
      onOk={() => dispatch(setOpenModal2(false))}
      onCancel={() => dispatch(setOpenModal2(false))}
      okText="Edit"
    >
      English - Русский - O'zbek - Узбек
    </Modal>
  );
};

export default LanguageModal;
