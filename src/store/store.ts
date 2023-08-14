import { configureStore } from "@reduxjs/toolkit";
import loginFormReduer from "./loginFormSlice";
import authReducer from "./authSlice";
import signupFormReducer from "./signupFormSlice";
import addPostFormReducer from "./addPostFormSlice";
import postsReducer from "./postsSlice";
import editPostFromReducer from "./editPostFromSlice";
import confirmDialogReducer from "./confirmDialogSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginForm: loginFormReduer,
    signupFrorm: signupFormReducer,
    addPostForm: addPostFormReducer,
    editPostForm: editPostFromReducer,
    posts: postsReducer,
    confirmDialog: confirmDialogReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
