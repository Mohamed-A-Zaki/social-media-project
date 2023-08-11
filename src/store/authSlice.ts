import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  user: UserType | null;
  token: string;
  error: string;
};

const initialState: initialStateType = {
  user: null,
  token: "",
  error: "",
};

type loginBodyType = {
  username: string;
  password: string;
};

type signupBodyType = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type UserType = {
  username: string;
  name: string;
  email: string;
  id: number;
  comments_count: number;
  posts_count: number;
};

type authResponseType = {
  user: UserType;
  token: string;
};

const baseUrl = "https://tarmeezacademy.com/api/v1";

export const login = createAsyncThunk(
  "auth/login",
  async (values: loginBodyType) => {
    const url = `${baseUrl}/login`;
    const { data } = await axios.post<authResponseType>(url, values);
    return data;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (values: signupBodyType) => {
    const url = `${baseUrl}/register`;
    const { data } = await axios.post<authResponseType>(url, values);
    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, ThunkAPI) => {
  const url = `${baseUrl}/logout`;
  const token = (ThunkAPI.getState() as { auth: initialStateType }).auth.token;

  await axios.post(url, null, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return {};
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.error = "";
      })
      .addCase(login.rejected, (state, { error }) => {
        state.token = "";
        state.user = null;
        state.error = error.message as string;
      })
      // signup
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.error = "";
      })
      .addCase(signup.rejected, (state, { error }) => {
        state.token = "";
        state.user = null;
        state.error = error.message as string;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = "";
      })
      .addCase(logout.rejected, (_, { error }) => {
        console.log(error);
      });
  },
});

// export const {} = authSlice.actions

export default authSlice.reducer;
