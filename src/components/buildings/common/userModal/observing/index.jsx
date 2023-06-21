import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";
import dayjs from "dayjs";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { switchUserModal } from "../../../../../redux/modalSlice";

const Observing = () => {
  let { selectedUser } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let { t } = useTranslation();
  let {
    fullName,
    address,
    arrivalDate,
    birthDate,
    passportID,
    phoneNumber,
    endDate,
    dayCost,
    total,
    paidByCash,
    paidByPlasticCard,
    roomNumber,
  } = selectedUser.userData;

  return (
    <Wrapper>
      <Wrapper.Item>
        <Wrapper.Text>{t("full_name")}</Wrapper.Text>
        <Wrapper.Text>{fullName}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("birth_date")}</Wrapper.Text>
        <Wrapper.Text>{dayjs(+birthDate).format("MM/DD/YYYY")}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("passport_number")}</Wrapper.Text>
        <Wrapper.Text>{passportID}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("phone_number")}</Wrapper.Text>
        <Wrapper.Text>{phoneNumber}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("address")}</Wrapper.Text>
        <Wrapper.Text>{address}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("came_date")}</Wrapper.Text>
        <Wrapper.Text>{dayjs(+arrivalDate).format("MM/DD/YYYY")}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("end_date")}</Wrapper.Text>
        <Wrapper.Text>{dayjs(+endDate).format("MM/DD/YYYY")}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("remaining_days")}</Wrapper.Text>
        <Wrapper.Text>{dayjs(+endDate).diff(new Date(), "d")}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("daily_price")}</Wrapper.Text>
        <Wrapper.Text>{dayCost}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("total_price")}</Wrapper.Text>
        <Wrapper.Text>{total}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("voucher_status")}</Wrapper.Text>
        <Wrapper.Text>{t("voucher_status_text")}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("pay_by_cash")}</Wrapper.Text>
        <Wrapper.Text>{paidByCash}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("pay_by_card")}</Wrapper.Text>
        <Wrapper.Text>{paidByPlasticCard}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("payment_difference")}</Wrapper.Text>
        <Wrapper.Text>000</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("building_number")}</Wrapper.Text>
        <Wrapper.Text>
          {t("building")} {selectedUser.buildingMutation}
        </Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Item>
        <Wrapper.Text>{t("room_number")}</Wrapper.Text>
        <Wrapper.Text>{roomNumber}</Wrapper.Text>
      </Wrapper.Item>
      <Wrapper.Footer>
        <Button onClick={() => dispatch(switchUserModal())}>
          {t("cancel_btn")}
        </Button>
        <Button type="primary">{t("move_btn")}</Button>
        <Button type="primary" danger>
          {t("delete_btn")}
        </Button>
      </Wrapper.Footer>
    </Wrapper>
  );
};

export default Observing;
