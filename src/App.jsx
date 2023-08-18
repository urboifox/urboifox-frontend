// import { Blob } from "./components/";

import { Cursor, ScrollBar } from "./components";
import { RouterProvider } from "react-router";
import myRouter from "./routes";
import { useSelector } from "react-redux";
import { lenis } from "./lenis";
function App() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  document.body.style.backgroundColor = darkTheme ? "#141414" : "#ddd";
  document.body.style.transition = darkTheme ? "300ms" : "300ms";

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
