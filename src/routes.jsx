import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import {
  Login,
  About,
  Info,
  Education,
  Experience,
  Home,
  NotFound,
  Skills,
  Work,
  Project,
  Contact,
  Admin,
  Logout,
} from "./pages";

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
        path: "/about/skills",
        element: <Skills />,
      },
      {
        path: "/about/education",
        element: <Education />,
      },
      {
        path: "/about/experience",
        element: <Experience />,
      },
      {
        path: "/about/info",
        element: <Info />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/work/:id",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default myRouter;
