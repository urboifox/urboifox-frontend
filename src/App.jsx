// import { Blob } from "./components/";

import { useSelector } from "react-redux";
import { Cursor } from "./components";
import { RouterProvider } from "react-router";
import myRouter from "./routes";
import Lenis from "@studio-freight/lenis";

function App() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  document.body.style.backgroundColor = darkTheme ? "#101010" : "#ffffff";
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Cursor />
      {/* <Blob /> */}
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
