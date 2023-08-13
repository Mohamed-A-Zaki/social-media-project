import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import UserType from "../types/user.type";

type InitialState = {
  user: UserType | null;
  token: string;
  error: string;
};

const initialState: InitialState = {
  user: null,
  token: "",
  error: "",
};

type loginBody = {
  username: string;
  password: string;
};

type authResponse = {
  user: UserType;
  token: string;
};

const baseUrl = "https://tarmeezacademy.com/api/v1";

export const login = createAsyncThunk(
  "auth/login",
  async (values: loginBody) => {
    const url = `${baseUrl}/login`;
    const { data } = await axios.post<authResponse>(url, values);
    return data;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (values: FormData) => {
    const url = `${baseUrl}/register`;
    const { data } = await axios.post<authResponse>(url, values);
    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const url = `${baseUrl}/logout`;
  const token = localStorage.getItem("token");

  await axios.post(url, null, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return {};
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // login
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.error = "";
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user", JSON.stringify(payload.user));
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
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user", JSON.stringify(payload.user));
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
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      })
      .addCase(logout.rejected, (_, { error }) => {
        console.log(error);
      });
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
