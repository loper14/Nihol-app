import { Modal, Segmented } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModal } from "../../../../redux/modalSlice";
import { useState } from "react";
import Observing from "./observing";
import Booking from "./booking";
import Editing from "./editing";
import { useTranslation } from "react-i18next";
import UserEmptyUI from "./emptyUI/userEmptyUI";

const UserModal = () => {
  let { userModalVisibility } = useSelector((state) => state.modal);
  let { selectedUser } = useSelector((state) => state.user);
  let { t } = useTranslation();
  let [segmentedOption, setSegmentedOption] = useState(t("observing"));
  let dispatch = useDispatch();
  return (
    <Modal
      title={t("user_info")}
      open={userModalVisibility}
      onCancel={() => dispatch(switchUserModal())}
      footer={null}
    >
      <Segmented
        block
        options={[t("observing"), t("booked_places"), t("editing")]}
        onChange={(e) => setSegmentedOption(e)}
        style={{ marginBottom: "30px" }}
      />
      {segmentedOption === t("observing") ? (
        selectedUser?.clienteValue?.userID ? (
          <Observing />
        ) : (
          <UserEmptyUI />
        )
      ) : segmentedOption === t("booked_places") ? (
        <Booking />
      ) : selectedUser?.clienteValue?.userID ? (
        <Editing />
      ) : (
        <UserEmptyUI />
      )}
    </Modal>
  );
};

export default UserModal;
