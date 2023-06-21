import dayjs from "dayjs";
import useQueryHandler from "../../../../../hooks/useQuery";
import { Wrapper } from "../../../secondBuilding/style";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { switchUserModal } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { useDispatch } from "react-redux";

const Room = ({ values }) => {
  let { t } = useTranslation();
  let dispatch = useDispatch();
  let { clienteValue } = values;
  let { isLoading, data } = useQueryHandler({
    url: `/accomodation/3/user?_id=${clienteValue.userID}`,
    queryKey: `user${clienteValue.userID}`,
  });

  let clickHandler = () => {
    dispatch(switchUserModal());
    dispatch(
      setSelectedUser({
        ...values,
        userData: data,
      })
    );
  };

  return (
    <Wrapper.Room color="red" onClick={() => clickHandler()}>
      <Tooltip title={t("booked_text")}>
        <Wrapper.InfoRoom color="yellow">
          <InfoCircleOutlined color="yellow" />
        </Wrapper.InfoRoom>
      </Tooltip>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(+data.endDate).diff(new Date(), "d")
      )}
    </Wrapper.Room>
  );
};

export default Room;
