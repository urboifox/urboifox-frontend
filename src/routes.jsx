import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import {
  About,
  InfoPage,
  EducationPage,
  ExperiencePage,
  Home,
  NotFound,
  SkillsPage,
  Work,
  ProjectPage,
  Contact,
  Admin,
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
        path: "/about/info",
        element: <InfoPage />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/work/:id",
        element: <ProjectPage />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default myRouter;
