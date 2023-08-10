import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateType = {
  token: string;
  error: string;
};

const initialState: initialStateType = {
  token: "",
  error: "",
};

type loginBodyType = {
  username: string;
  password: string;
};

type loginResponseType = {
  user: {
    username: string;
    name: string;
    email: string;
    id: number;
    comments_count: number;
    posts_count: number;
  };
  token: string;
};

export const login = createAsyncThunk(
  "auth/login",
  async (values: loginBodyType) => {
    const url = "https://tarmeezacademy.com/api/v1/login";
    const { data } = await axios.post<loginResponseType>(url, values);
    return data.token;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.error = "";
      })
      .addCase(login.rejected, (state, { error }) => {
        state.token = "";
        state.error = error.message as string;
      });
  },
});

// export const {} = authSlice.actions

export default authSlice.reducer;
