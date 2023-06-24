import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { switchUserModal } from "../../../../../redux/modalSlice";
import { Wrapper } from "../../../secondBuilding/style";

const BookedRoom = ({ values }) => {
  let dispatch = useDispatch();
  let clickHandler = () => {
    dispatch(switchUserModal());
    dispatch(
      setSelectedUser({
        ...values,
      })
    );
  };

  return <Wrapper.Room onClick={() => clickHandler()} color="processing" />;
};

export default BookedRoom;
