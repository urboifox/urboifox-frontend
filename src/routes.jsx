import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts";
import { About, Home, NotFound, Work } from "./components";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default myRouter;
