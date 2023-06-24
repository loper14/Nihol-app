import { useTranslation } from "react-i18next";
import { Wrapper } from "../../secondBuilding/style";
import { useQueryClient } from "react-query";
import Room from "./room";
import BookedRoom from "./bookedRoom";
import EmptyRoom from "./emptyRoom";

const Mapping = () => {
  let queryClient = useQueryClient();
  let data = queryClient.getQueryData("accomodation/4");
  let { t } = useTranslation();

  let typeChecker = ({ clienteValue, roomValue }) => {
    return clienteValue.userID ||
      (clienteValue.isBooked && clienteValue.userID) ? (
      <Room key={clienteValue.clienteID} values={{ clienteValue, roomValue }} />
    ) : !clienteValue.isBooked ? (
      <EmptyRoom key={clienteValue.clienteID} />
    ) : (
      <BookedRoom
        values={{ clienteValue, roomValue }}
        key={clienteValue.clienteID}
      />
    );
  };

  return (
    <Wrapper.MainCardWrapper>
      <Wrapper.CardWrapper>
        <Wrapper.RoomsWrapper>
          {data?.map((roomValue) => (
            <Wrapper.RoomWrapper key={roomValue._id}>
              <Wrapper.RoomTitle>
                {roomValue.roomNumber} {t("room")}
              </Wrapper.RoomTitle>
              <Wrapper.ClienteWrapper>
                {roomValue.cliente.map((clienteValue) =>
                  typeChecker({ clienteValue, roomValue })
                )}
              </Wrapper.ClienteWrapper>
            </Wrapper.RoomWrapper>
          ))}
        </Wrapper.RoomsWrapper>
      </Wrapper.CardWrapper>
    </Wrapper.MainCardWrapper>
  );
};

export default Mapping;
