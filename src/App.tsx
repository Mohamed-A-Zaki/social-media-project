import "./App.css";
import { Outlet } from "react-router-dom";

import AddPostButton from "./helperComponents/AddPostButton";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/Auth/LoginForm/LoginForm";
import SignupForm from "./components/Auth/SignupForm/SignupForm";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <Outlet />

      <LoginForm />
      <SignupForm />
      <AddPostForm />
      <AddPostButton />
    </>
  );
};

export default App;
