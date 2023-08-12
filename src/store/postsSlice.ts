import axios from "axios";
import PostType from "../types/Post.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  posts: PostType[];
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  posts: [],
  loading: false,
  error: "",
};

type GetPostsResponse = {
  data: PostType[];
};

type CreatePotsResponse = {
  data: PostType;
};

const baseUrl = "https://tarmeezacademy.com/api/v1";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const url = `${baseUrl}/posts`;
  const { data } = await axios.get<GetPostsResponse>(url);
  return data.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (formData: FormData) => {
    const url = `${baseUrl}/posts`;
    const token = localStorage.getItem("token");

    const { data } = await axios.post<CreatePotsResponse>(url, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get posts list
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      // create new post
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.error = "";
        state.posts.unshift(payload);
      })
      .addCase(createPost.rejected, (state, { error }) => {
        state.error = error.message as string;
      });
  },
});

// export const {} = postsSlice.actions

export default postsSlice.reducer;
