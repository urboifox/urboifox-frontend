// import { Blob } from "./components/";

import { Cursor } from "./components";
import { RouterProvider } from "react-router";
import myRouter from "./routes";
import { useSelector } from "react-redux";
import { lenis } from "./lenis";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  document.body.style.backgroundColor = darkTheme ? "#111" : "#ddd";
  document.body.style.transition = darkTheme ? "300ms" : "300ms";

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <SkeletonTheme baseColor="#141414" highlightColor="#444">
        <Cursor />
        <RouterProvider router={myRouter} />
        <div className="h-[100vh]"></div>
      </SkeletonTheme>
    </>
  );
}

export default App;
