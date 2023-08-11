import { configureStore } from "@reduxjs/toolkit";
import loginFormReduer from "./loginFormSlice";
import authReducer from "./authSlice";
import signupFormReducer from "./signupFormSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginForm: loginFormReduer,
    signupFrorm: signupFormReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
