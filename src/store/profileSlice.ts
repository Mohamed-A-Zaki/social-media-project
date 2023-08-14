import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import UserType from "./../types/user.type";
import PostType from "./../types/Post.type";

type InitialState = {
  user: UserType | null;
  posts: PostType[];
  user_error: string;
  posts_error: string;
};

const initialState: InitialState = {
  user: null,
  posts: [],
  user_error: "",
  posts_error: "",
};

const baseUrl = "https://tarmeezacademy.com/api/v1/users";

export const getUser = createAsyncThunk(
  "profile/getUser",
  async (userid: number) => {
    const url = `${baseUrl}/${userid}`;
    const { data } = await axios.get(url);
    return data.data;
  }
);

export const getUserPosts = createAsyncThunk(
  "profile/getUserPosts",
  async (userid: number) => {
    const url = `${baseUrl}/${userid}/posts`;
    const { data } = await axios.get(url);
    return data.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(getUser.rejected, (state, { error }) => {
        state.user_error = error.message as string;
      })

      .addCase(getUserPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(getUserPosts.rejected, (state, { error }) => {
        state.posts_error = error.message as string;
      });
  },
});

export default profileSlice.reducer;
