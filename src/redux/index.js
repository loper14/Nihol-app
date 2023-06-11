import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlices";
import localeSlice from "./localeSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    locale: localeSlice,
  },
});
