import { configureStore } from "@reduxjs/toolkit";
import loginFormReduer from "./loginFormSlice";
import authReducer from "./authSlice";
import signupFormReducer from "./signupFormSlice";
import addPostFormReducer from "./addPostFormSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginForm: loginFormReduer,
    signupFrorm: signupFormReducer,
    addPostForm : addPostFormReducer
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
