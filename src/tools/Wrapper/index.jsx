import { ConfigProvider } from "antd";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ru_RU from "antd/locale/ru_RU";
import en_US from "antd/locale/en_US";
import store from "../../redux";
import { AuthProvider } from "react-auth-kit";

const Wrapper = ({ children }) => {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <Provider store={store}>
        <BrowserRouter>
          <ConfigProvider locale={en_US}>{children}</ConfigProvider>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
};

export default Wrapper;
