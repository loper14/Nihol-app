import { Button, DatePicker, Form, Input } from "antd";
import { Wrapper } from "../observing/style";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { switchUserModal } from "../../../../../redux/modalSlice";
import { useUpdateUser } from "../../../../../hooks/useQuery/useQueryActions";
import { useQueryClient } from "react-query";
import UseNotificationAPI from "../../../../../generic/NotificationAPI";

const Editing = () => {
  let { RangePicker } = DatePicker;
  let queryClient = useQueryClient();
  let { selectedUser } = useSelector((state) => state.user);
  let userData = queryClient.getQueryData(`user/${selectedUser.userData._id}`);
  let dispatch = useDispatch();
  let { t } = useTranslation();
  let { mutate } = useUpdateUser();
  let notifier = UseNotificationAPI();

  let onFinish = (e) => {
    let shouldUpdate = {
      ...e,
      birthDate: new Date(+e.birthDate).getTime(),
      arrivalDate: new Date(+e.dateRange[0].$d).getTime(),
      endDate: new Date(+e.dateRange[1].$d).getTime(),
    };
    delete shouldUpdate.dateRange;
    mutate({ shouldUpdate });
  };
  console.log(userData);

  return (
    <Form
      onFinish={onFinish}
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
        passportID: userData.passportID,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
        dateRange: [dayjs(+userData.arrivalDate), dayjs(+userData.endDate)],
        dayCost: userData.dayCost,
        paidByCash: userData.paidByCash,
        paidByPlasticCard: userData.paidByPlasticCard,
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
        name="passportID"
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
        label={t("date_range")}
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
        name="dayCost"
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
        name="paidByCash"
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
        name="paidByPlasticCard"
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
        <Button
          onClick={() => notifier("saved")}
          htmlType="submit"
          type="primary"
        >
          {t("edit_btn")}
        </Button>
      </Wrapper.Footer>
    </Form>
  );
};

export default Editing;
