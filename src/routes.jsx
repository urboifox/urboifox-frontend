import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts";
import { Home, NotFound } from "./components";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default myRouter;
