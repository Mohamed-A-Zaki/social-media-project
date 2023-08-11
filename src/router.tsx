import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import PersistLogin from "./helperComponents/PersistLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PersistLogin>
        <App />
      </PersistLogin>
    ),
  },
]);

export default router;
