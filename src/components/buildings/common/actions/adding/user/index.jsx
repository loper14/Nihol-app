import { Modal, Segmented } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchAddUserModal } from "../../../../../../redux/modalSlice";
import { useState } from "react";
import Ordinary from "./ordinary";
import Voucher from "./voucher";
import { useTranslation } from "react-i18next";

const Adding = () => {
  let dispatch = useDispatch();
  let { t } = useTranslation();
  let [active, setActive] = useState(t("ordinary"));
  let { addUserModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      title={t("add_new_user")}
      open={addUserModalVisibility}
      onCancel={() => dispatch(switchAddUserModal())}
      okText={t("add_btn")}
      cancelText={t("cancel_btn")}
    >
      <Segmented
        options={[t("ordinary"), t("voucher")]}
        block
        onChange={(e) => setActive(e)}
        style={{ marginBottom: "10px" }}
      />
      {active === t("ordinary") ? <Ordinary /> : <Voucher />}
    </Modal>
  );
};

export default Adding;
