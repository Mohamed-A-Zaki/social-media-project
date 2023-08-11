import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./authSlice";

const initialState = {
  open: false,
};

const signupFormSlice = createSlice({
  name: "signupForm",
  initialState,
  reducers: {
    openSignupDrawer: (state) => {
      state.open = true;
    },
    closeSignupDrawer: (state) => {
      state.open = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state) => {
      state.open = false;
    });
  },
});

export const { openSignupDrawer, closeSignupDrawer } = signupFormSlice.actions;

export default signupFormSlice.reducer;
