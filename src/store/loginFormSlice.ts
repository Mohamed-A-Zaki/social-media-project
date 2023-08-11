import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authSlice";

const initialState = {
  open: false,
};

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    openLoginDrawer: (state) => {
      state.open = true;
    },
    closeLoginDrawer: (state) => {
      state.open = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.open = false;
    });
  },
});

export const { openLoginDrawer, closeLoginDrawer } = loginFormSlice.actions;

export default loginFormSlice.reducer;
