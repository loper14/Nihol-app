import dayjs from "dayjs";
import useQueryHandler from "../../../../../hooks/useQuery";
import { Wrapper } from "../../../secondBuilding/style";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const Room = ({ values }) => {
  let { clienteValue } = values;
  let { isLoading, data } = useQueryHandler({
    url: `/accomodation/4/user?_id=${clienteValue.userID}`,
    queryKey: `user${clienteValue.userID}`,
  });

  return (
    <Wrapper.Room color="red">
      <Tooltip title="This room is booked">
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
