import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const addPostFormSlice = createSlice({
  name: "addPostForm",
  initialState,
  reducers: {
    openAddPostForm: (state) => {
      state.open = true;
    },
    closeAddPostForm: (state) => {
      state.open = false;
    },
  },
});

export const { openAddPostForm, closeAddPostForm } = addPostFormSlice.actions;

export default addPostFormSlice.reducer;
