import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts";
import {
  About,
  ConnectPage,
  EducationPage,
  ExperiencePage,
  Home,
  NotFound,
  SkillsPage,
  Work,
} from "./components";

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
        element: <SkillsPage />,
      },
      {
        path: "/about/education",
        element: <EducationPage />,
      },
      {
        path: "/about/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/about/connect",
        element: <ConnectPage />,
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
