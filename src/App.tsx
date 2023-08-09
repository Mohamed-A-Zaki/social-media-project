import "./App.css";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";

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
    </>
  );
};

export default App;
