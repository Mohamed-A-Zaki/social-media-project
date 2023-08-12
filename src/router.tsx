import App from "./App";
import { createHashRouter } from "react-router-dom";
import PersistLogin from "./helperComponents/PersistLogin";
import PostDetails from "./components/PostDetails/PostDetails";
import PostsList from "./helperComponents/PostsList";

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
        element: <PostsList />,
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
      },
    ],
  },
]);

export default router;
