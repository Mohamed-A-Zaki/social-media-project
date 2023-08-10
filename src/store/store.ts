import { configureStore } from "@reduxjs/toolkit";
import loginFormReduer from "./loginFormSlice";

const store = configureStore({
  reducer: {
    loginForm: loginFormReduer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
