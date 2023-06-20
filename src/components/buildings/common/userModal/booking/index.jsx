import { Button } from "antd";
import BookedEmptyUi from "../emptyUI/bookedEmptyUI";
import { Wrapper } from "../observing/style";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { switchUserModal } from "../../../../../redux/modalSlice";

const Booking = () => {
  let { t } = useTranslation();
  let dispatch = useDispatch();
  return (
    <>
      <BookedEmptyUi />;
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
