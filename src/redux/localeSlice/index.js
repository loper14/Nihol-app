import { createSlice } from "@reduxjs/toolkit";

export let localeSlice = createSlice({
  name: "localeSlice",
  initialState: {
    lang: "uzKrill",
  },
  reducers: {
    changeLang(state, { payload }) {
      state.lang = payload;
    },
  },
});
export let { changeLang } = localeSlice.actions;
export default localeSlice.reducer;
