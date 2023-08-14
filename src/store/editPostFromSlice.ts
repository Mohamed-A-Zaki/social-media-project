import { createSlice } from "@reduxjs/toolkit";
import { editPost } from "./postsSlice";

const initialState = {
  open: false,
};

const editPostFromSlice = createSlice({
  name: "editPostFrom",
  initialState,
  reducers: {
    openEditPostFrom: (state) => {
      state.open = true;
    },
    closeEditPostFrom: (state) => {
      state.open = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editPost.fulfilled, (state) => {
      state.open = false;
    });
  },
});

export const { openEditPostFrom, closeEditPostFrom } =
  editPostFromSlice.actions;

export default editPostFromSlice.reducer;
