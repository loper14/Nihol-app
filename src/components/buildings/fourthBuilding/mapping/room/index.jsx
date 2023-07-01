import dayjs from "dayjs";
import useQueryHandler from "../../../../../hooks/useQuery";
import { Wrapper } from "../../../secondBuilding/style";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { switchUserModal } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { useTranslation } from "react-i18next";

const Room = ({ values }) => {
  let dispatch = useDispatch();
  let { t } = useTranslation();
  let { clienteValue } = values;
  let { isLoading, data } = useQueryHandler({
    url: `/accomodation/4/user?_id=${clienteValue.userID}`,
    queryKey: `user/${clienteValue.userID}`,
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
      {clienteValue.isBooked && (
        <Tooltip title={t("booked_text")}>
          <Wrapper.InfoRoom color="yellow">
            <InfoCircleOutlined color="yellow" />
          </Wrapper.InfoRoom>
        </Tooltip>
      )}
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(+data.endDate).diff(new Date(), "d")
      )}
    </Wrapper.Room>
  );
};

export default Room;
