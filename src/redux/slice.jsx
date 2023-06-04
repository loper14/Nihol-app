import { createSlice } from "@reduxjs/toolkit";

export let Slice1 = createSlice({
  name: "modalSlices",
  initialState: {
    openModal: false,
    openModal2: false,
    isLogout: false,
  },
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
    setOpenModal2(state, action) {
      state.openModal2 = action.payload;
    },
    setLogout(state, action) {
      state.isLogout = action.payload;
    },
  },
});
export let { setOpenModal, setOpenModal2, setLogout } = Slice1.actions;
export default Slice1.reducer;
