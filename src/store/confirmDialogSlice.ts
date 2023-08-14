import { createSlice } from "@reduxjs/toolkit";
import { deletePost } from "./postsSlice";

const initialState = {
  open: false,
};

const confirmDialogSlice = createSlice({
  name: "confirmDialog",
  initialState,
  reducers: {
    openConfirmDialog: (state) => {
      state.open = true;
    },
    closeConfirmDialog: (state) => {
      state.open = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deletePost.fulfilled, (state) => {
      state.open = false;
    });
  },
});

export const { openConfirmDialog, closeConfirmDialog } =
  confirmDialogSlice.actions;

export default confirmDialogSlice.reducer;
