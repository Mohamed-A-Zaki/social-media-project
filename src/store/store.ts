import { configureStore } from "@reduxjs/toolkit";
import loginFormReduer from "./loginFormSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    loginForm: loginFormReduer,
    auth: authReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
