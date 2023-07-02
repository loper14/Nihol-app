import { notification } from "antd";

let notifier = (status) => {
  switch (status) {
    case 400:
      return notification.warning({
        message: "Password length must be  8 ~ 10 !",
      });
    case 409:
      return notification.error({
        message: "User not found!",
      });
    case "empty":
      return notification.warning({
        message: "Please fill all the fields!",
      });
    case "saved":
      return notification.success({
        message: "Saved!",
      });
    default:
      return;
  }
};

const UseNotificationAPI = () => {
  return notifier;
};

export default UseNotificationAPI;
