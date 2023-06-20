import { useQuery } from "react-query";
import useAxios from "../useAxios";

const useQueryHandler = ({ url, queryKey, method = "GET", body }) => {
  let axios = useAxios();
  return useQuery(
    queryKey,
    () => {
      return axios({
        url,
        method,
        data: body,
      }).then((res) => res.data.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export default useQueryHandler;
