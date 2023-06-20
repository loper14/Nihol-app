import { Button, DatePicker, Form, Input } from "antd";
import { Wrapper } from "../observing/style";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { switchUserModal } from "../../../../../redux/modalSlice";

const Editing = () => {
  let { RangePicker } = DatePicker;
  let { selectedUser } = useSelector((state) => state.user);
  let userData = selectedUser.userData;
  let dispatch = useDispatch();
  let { t } = useTranslation();
  return (
    <div style={{ width: "100%" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 28,
        }}
        style={{
          maxWidth: 900,
        }}
        initialValues={{
          fullName: userData.fullName,
          birthDate: dayjs(+userData.birthDate),
          passportNumber: userData.passportID,
          phoneNumber: userData.phoneNumber,
          address: userData.address,
          // dateRange: [
          //   dayjs(userData.arrivalDate, "YYYY-MM-DD"),
          //   dayjs("2015-06-06", "YYYY-MM-DD"),
          // ],
          dailyPrice: userData.dayCost,
          payByCash: userData.paidByCash,
          payByCard: userData.paidByPlasticCard,
        }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label={t("full_name")}
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("birth_date")}
          name="birthDate"
          rules={[
            {
              required: true,
              message: "Please input your birth date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={t("passport_number")}
          name="passportNumber"
          rules={[
            {
              required: true,
              message: "Please input your passport number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("phone_number")}
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input addonBefore="+998" />
        </Form.Item>
        <Form.Item
          label={t("address")}
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("data_range")}
          name="dateRange"
          rules={[
            {
              required: true,
              message: "Please input your date range!",
            },
          ]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          label={t("daily_price")}
          name="dailyPrice"
          rules={[
            {
              required: true,
              message: "Please input your daily price!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("pay_by_cash")}
          name="payByCash"
          rules={[
            {
              required: true,
              message: "Please input your pay by cash!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label={t("pay_by_card")}
          name="payByCard"
          rules={[
            {
              required: true,
              message: "Please input your pay by card!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Wrapper.Footer>
          <Button onClick={() => dispatch(switchUserModal())}>
            {t("cancel_btn")}
          </Button>
          <Button type="primary">{t("edit_btn")}</Button>
        </Wrapper.Footer>
      </Form>
    </div>
  );
};

export default Editing;
