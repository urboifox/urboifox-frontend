import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts";
import { Home } from "./components";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default myRouter;
