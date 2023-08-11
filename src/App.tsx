import "./App.css";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import SignupForm from "./components/SignupForm";

/**
 * A function that renders the App component.
 *
 * @return {JSX.Element} The JSX element representing the App component.
 */
const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <PostsList />
      <LoginForm />
      <SignupForm />
    </>
  );
};

export default App;
