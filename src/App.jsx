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
  if (darkTheme !== null) {
    document.body.style.backgroundColor = darkTheme ? "#0a0a0a" : "#ddd";
    document.body.style.transition = darkTheme ? "300ms" : "300ms";
  }
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
      </SkeletonTheme>
    </>
  );
}

export default App;
