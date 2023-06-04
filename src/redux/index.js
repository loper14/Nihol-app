import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./slice";

export default configureStore({
  reducer: {
    modal: Slice1,
  },
});
