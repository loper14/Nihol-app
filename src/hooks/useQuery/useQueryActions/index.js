import { useSelector } from "react-redux";
import useAxios from "../../useAxios";
import { useMutation, useQueryClient } from "react-query";

// cache handling

let useUpdateUserFromCache = () => {
  let queryClient = useQueryClient();
  let { selectedUser } = useSelector((state) => state.user);
  return ({ shouldUpdate }) => {
    queryClient.setQueryData(`user/${selectedUser.userData._id}`, () => {
      return {
        ...selectedUser.userData,
        ...shouldUpdate,
      };
    });
  };
};

// mutation

let useUpdateUser = () => {
  let { selectedUser } = useSelector((state) => state.user);
  let axios = useAxios();
  let updateFromCache = useUpdateUserFromCache();
  return useMutation(({ shouldUpdate }) => {
    updateFromCache({ shouldUpdate });
    return axios({
      method: "POST",
      url: "/accomodation/2/update-user",
      data: {
        ...selectedUser.userData,
        ...shouldUpdate,
      },
    });
  });
};
export { useUpdateUser };
