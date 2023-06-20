import axios from "axios";

const useAxios = () => {
  return async ({ url, method = "GET", data, headers }) => {
    return await axios({
      method,
      url: `${process.env.REACT_APP_MAIN_URL}${url}`,
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Allow-Control-Origin": true,
        ...headers,
      },
    });
  };
};

export default useAxios;
