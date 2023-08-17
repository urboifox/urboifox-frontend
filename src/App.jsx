// import { Blob } from "./components/";

import { Cursor, ScrollBar } from "./components";
import { RouterProvider } from "react-router";
import myRouter from "./routes";
import Lenis from "@studio-freight/lenis";
import { useSelector } from "react-redux";

function App() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  document.body.style.backgroundColor = darkTheme ? "#141414" : "#fff";
  document.body.style.transition = darkTheme ? "300ms" : "300ms";
  const lenis = new Lenis({
    duration: 2,
    smoothTouch: 0.1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <ScrollBar />
      <Cursor />
      {/* <Blob /> */}
      <RouterProvider router={myRouter} />
      <div className="h-[300vh]"></div>
    </>
  );
}

export default App;
