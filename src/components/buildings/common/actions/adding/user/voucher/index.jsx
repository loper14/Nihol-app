import { DatePicker, Form, Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const Voucher = () => {
  let { RangePicker } = DatePicker;
  let { t } = useTranslation();
  return (
    <Form
      name="basic"
      labelCol={{
        span: 16,
      }}
      wrapperCol={{
        span: 28,
      }}
      style={{
        maxWidth: 900,
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
        label={t("voucher_cost")}
        name="dailyPrice"
        rules={[
          {
            required: true,
            message: "Please input your daily price!",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label={t("voucher_number")}
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
        label={t("work_place")}
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
        label={t("voucher_given")}
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
        label={t("building_number")}
        name="payByCash"
        rules={[
          {
            required: true,
            message: "Please input your building number!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("room_number")}
        name="payByCard"
        rules={[
          {
            required: true,
            message: "Please input your room number!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default Voucher;
