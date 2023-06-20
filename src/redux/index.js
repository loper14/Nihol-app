import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import localeSlice from "./localeSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    locale: localeSlice,
    user: userSlice,
  },
});
