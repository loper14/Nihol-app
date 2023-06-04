import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ru_RU from "antd/locale/ru_RU";
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
          <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
};

export default Wrapper;
