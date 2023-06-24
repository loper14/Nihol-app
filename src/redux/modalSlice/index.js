import { createSlice } from "@reduxjs/toolkit";

export let modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    userModalVisibility: false,
    addUserModalVisibility: false,
    bookingUserAddModalVisibility: false,
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
    switchAddUserModal(state) {
      state.addUserModalVisibility = !state.addUserModalVisibility;
    },
    switchBookingUserAddModal(state) {
      state.bookingUserAddModalVisibility =
        !state.bookingUserAddModalVisibility;
    },
  },
});
export let {
  switchProfileModal,
  switchLocaleModal,
  switchUserModal,
  switchAddUserModal,
  switchBookingUserAddModal,
} = modalSlice.actions;
export default modalSlice.reducer;
