import { Button } from "antd";
import BookedEmptyUi from "../emptyUI/bookedEmptyUI";
import { Wrapper } from "../observing/style";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModal } from "../../../../../redux/modalSlice";
import BookedUser from "./bookedUser";

const Booking = () => {
  let { selectedUser } = useSelector((state) => state.user);
  let { t } = useTranslation();
  let dispatch = useDispatch();
  return (
    <>
      {!selectedUser.clienteValue.isBooked ? <BookedEmptyUi /> : <BookedUser />}
      <Wrapper.Footer>
        <Button onClick={() => dispatch(switchUserModal())}>
          {t("cancel_btn")}
        </Button>
        <Button type="primary">{t("add_btn")}</Button>
      </Wrapper.Footer>
    </>
  );
};

export default Booking;
