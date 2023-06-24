import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";

const UserEmptyUI = () => {
  let { t } = useTranslation();
  return (
    <Result
      status={404}
      extra={[
        t("empty_room_extra"),
        <br />,
        <Button type="primary" style={{ marginTop: "15px" }}>
          {t("add_btn")}
        </Button>,
      ]}
    />
  );
};

export default UserEmptyUI;
