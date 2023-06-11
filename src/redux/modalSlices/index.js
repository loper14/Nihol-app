import { createSlice } from "@reduxjs/toolkit";

export let modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
  },
  reducers: {
    switchProfileModal(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchLocaleModal(state, { payload }) {
      state.localeModalVisibility = !state.localeModalVisibility;
    },
  },
});
export let { switchProfileModal, switchLocaleModal } = modalSlice.actions;
export default modalSlice.reducer;
