import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.open = true;
    },
    closeDrawer: (state) => {
      state.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = loginFormSlice.actions;

export default loginFormSlice.reducer;
