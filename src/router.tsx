import App from "./App";
import { createHashRouter } from "react-router-dom";
import PersistLogin from "./helperComponents/PersistLogin";
import PostDetails from "./components/PostDetails/PostDetails";
import PostsList from "./helperComponents/PostsList";
import Profile from "./components/Profile/Profile";
import ScrollToTop from "./helperComponents/ScrollToTop";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <PersistLogin>
        <App />
      </PersistLogin>
    ),
    children: [
      {
        index: true,
        element: (
          <ScrollToTop>
            <PostsList />
          </ScrollToTop>
        ),
      },
      {
        path: "/post/:id",
        element: (
          <ScrollToTop>
            <PostDetails />
          </ScrollToTop>
        ),
      },
      {
        path: "/profile/:userId",
        element: (
          <ScrollToTop>
            <Profile />
          </ScrollToTop>
        ),
      },
    ],
  },
]);

export default router;
