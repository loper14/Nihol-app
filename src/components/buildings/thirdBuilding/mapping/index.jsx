import { useTranslation } from "react-i18next";
import { Wrapper } from "../../secondBuilding/style";
import { useQueryClient } from "react-query";

const Mapping = () => {
  let queryClient = useQueryClient();
  let data = queryClient.getQueryData("accomodation/3");
  let { t } = useTranslation();
  return (
    <Wrapper.MainCardWrapper>
      <Wrapper.CardWrapper>
        <Wrapper.RoomsWrapper>
          {data?.data.data.map((roomValue) => (
            <Wrapper.RoomWrapper key={roomValue._id}>
              <Wrapper.RoomTitle>
                {roomValue.roomNumber} {t("room")}
              </Wrapper.RoomTitle>
              <Wrapper.ClienteWrapper>
                {roomValue.cliente.map((clienteValue) => (
                  <Wrapper.Room
                    key={clienteValue.clienteID}
                    color="red"
                  ></Wrapper.Room>
                ))}
              </Wrapper.ClienteWrapper>
            </Wrapper.RoomWrapper>
          ))}
        </Wrapper.RoomsWrapper>
      </Wrapper.CardWrapper>
    </Wrapper.MainCardWrapper>
  );
};

export default Mapping;
