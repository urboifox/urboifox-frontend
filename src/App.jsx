// import { Blob } from "./components/";

import { Cursor, Loading, Particlesjs } from "./components";
import { RouterProvider } from "react-router";
import myRouter from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { lenis } from "./lenis";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { setLoading } from "./redux/slices/loadingSlice";
import { initiateData } from "./redux/slices/websiteDataSlice";
import axios from "axios";
import { primaryColor } from "./constants";
function App() {
  const root = document.documentElement;
  const loading = useSelector((state) => state.load.loading);
  const dispatch = useDispatch();
  root.style.setProperty("--primary-color", primaryColor);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // get api data
  useEffect(() => {
    const handleSetData = (data) => {
      dispatch(initiateData(data));
    };
    try {
      const res = axios.get("https://api.npoint.io/8170167729955bc6815a");
      res.then((res) => {
        handleSetData(res.data);
        dispatch(setLoading(false));
      });
    } catch (error) {
      console.log(`error fetching data: ${error}`);
    }
  }, [dispatch]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {loading && <Loading />}
      </AnimatePresence>
      <Particlesjs />
      <SkeletonTheme baseColor="#141414" highlightColor="#444">
        <Cursor />
        <RouterProvider router={myRouter} />
      </SkeletonTheme>
    </>
  );
}

export default App;
