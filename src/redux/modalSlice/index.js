import { createSlice } from "@reduxjs/toolkit";

export let modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    userModalVisibility: false,
  },
  reducers: {
    switchProfileModal(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchLocaleModal(state) {
      state.localeModalVisibility = !state.localeModalVisibility;
    },
    switchUserModal(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
  },
});
export let { switchProfileModal, switchLocaleModal, switchUserModal } =
  modalSlice.actions;
export default modalSlice.reducer;
