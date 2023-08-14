import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import PostType from "../types/Post.type";
import CommentType from "../types/comment.type";

type InitialState = {
  posts: PostType[];
  post: PostType;
  loading: boolean;
  error: string;
  commentError: string;
  editPostError: string;
  deletePostError: string;
};

const initialState: InitialState = {
  posts: [],
  post: {} as PostType,
  loading: false,
  error: "",
  commentError: "",
  editPostError: "",
  deletePostError: "",
};

type GetPostsResponse = {
  data: PostType[];
};

type GetPostResponse = {
  data: PostType;
};

type CreatePostResponse = {
  data: PostType;
};

type EditPostResponse = {
  data: PostType;
};

type EditPostParams = {
  id: number;
  formData: FormData;
};

type AddCommentResponse = {
  data: CommentType;
};

type AddCommentParams = {
  post_id: number;
  values: {
    body: string;
  };
};

const baseUrl = "https://tarmeezacademy.com/api/v1/posts";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const url = baseUrl;
  const { data } = await axios.get<GetPostsResponse>(url);
  return data.data;
});

export const getPost = createAsyncThunk("posts/getPost", async (id: number) => {
  const url = `${baseUrl}/${id}`;
  const { data } = await axios.get<GetPostResponse>(url);
  return data.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (formData: FormData) => {
    const url = baseUrl;
    const token = localStorage.getItem("token");

    const { data } = await axios.post<CreatePostResponse>(url, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  }
);

export const addCommnet = createAsyncThunk(
  "posts/addComment",
  async ({ post_id, values }: AddCommentParams) => {
    const url = `${baseUrl}/${post_id}/comments`;
    const token = localStorage.getItem("token");

    const { data } = await axios.post<AddCommentResponse>(url, values, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ id, formData }: EditPostParams) => {
    const url = `${baseUrl}/${id}`;
    const token = localStorage.getItem("token");

    const { data } = await axios.post<EditPostResponse>(url, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: number) => {
    const url = `${baseUrl}/${id}`;
    const token = localStorage.getItem("token");

    await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return id;
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
        state.error = "";
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      // get post
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, { payload }) => {
        state.error = "";
        state.loading = false;
        state.post = payload;
      })
      .addCase(getPost.rejected, (state, { error }) => {
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
      })

      // edit post
      .addCase(editPost.fulfilled, (state, { payload }) => {
        state.error = "";
        state.post = { ...state.post, ...payload };
      })
      .addCase(editPost.rejected, (state, { error }) => {
        state.editPostError = error.message as string;
      })

      // delete post
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.deletePostError = "";
        state.posts = state.posts.filter((post) => post.id !== payload);
      })
      .addCase(deletePost.rejected, (state, { error }) => {
        state.deletePostError = error.message as string;
      })

      // add comment
      .addCase(addCommnet.fulfilled, (state, { payload }) => {
        state.post.comments.push(payload);
      })
      .addCase(addCommnet.rejected, (state, { error }) => {
        state.commentError = error.message as string;
      });
  },
});

export default postsSlice.reducer;
