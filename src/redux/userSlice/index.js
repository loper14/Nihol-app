import { createSlice } from "@reduxjs/toolkit";

export let userSlice = createSlice({
  name: "userSlice",
  initialState: {
    selectedUser: {},
  },
  reducers: {
    setSelectedUser(state, { payload }) {
      state.selectedUser = payload;
    },
  },
});
export let { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
