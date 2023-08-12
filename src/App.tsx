import "./App.css";

import AddPostButton from "./helperComponents/AddPostButton";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import Navbar from "./components/Navbar/Navbar";
import PostsList from "./helperComponents/PostsList";
import LoginForm from "./components/Auth/LoginForm/LoginForm";
import SignupForm from "./components/Auth/SignupForm/SignupForm";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <PostsList />
      <LoginForm />
      <SignupForm />
      <AddPostForm />
      <AddPostButton />
    </>
  );
};

export default App;
