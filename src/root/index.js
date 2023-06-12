import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Navbar from "../components/navbar";
import { RequireAuth } from "react-auth-kit";
import { paths } from "../mock/paths";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../utils/locale/en";
import { ru } from "../utils/locale/ru";
import { uzLotin } from "../utils/locale/uzLotin";
import { uzKrill } from "../utils/locale/uzKrill";
import { useSelector } from "react-redux";

const Root = () => {
  let { lang } = useSelector((state) => state.locale);
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uzKrill: { translation: uzKrill },
      uzLotin: { translation: uzLotin },
    },
    lang,
    fallbackLng: lang, // when something went wrong
  });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }
      >
        {paths.map(({ id, path, element, hasChild = false, children }) => {
          return !hasChild ? (
            <Route key={id} path={path} element={element} />
          ) : (
            <Route key={id} path={path} element={element}>
              {children.map(({ id, path, element }) => {
                return <Route key={id} path={path} element={element} />;
              })}
            </Route>
          );
        })}
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
