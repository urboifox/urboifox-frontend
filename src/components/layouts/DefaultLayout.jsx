import { Circ, gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";
import Navbar from "../Navbar";
import NavMenu from "../NavMenu";
import axios from "axios";
import { initiateData } from "../../redux/slices/websiteDataSlice";

gsap.registerPlugin(ScrollTrigger);

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const localDarkTheme = localStorage.getItem("darkTheme");
  function initiateTheme() {
    if (localDarkTheme) {
      dispatch(setTheme(JSON.parse(localDarkTheme)));
    } else {
      dispatch(setTheme(true));
    }
  }
  initiateTheme();

  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapperTl = gsap.timeline();
      wrapperTl
        .to(".wrapper", {
          overflow: "hidden",
          duration: 0,
        })
        .from(".animateUp", 1, {
          y: "100%",
          ease: Circ.Out,
          scrollTrigger: {
            trigger: ".animateUp",
            start: "top 80%",
          },
        })
        .to(".wrapper", {
          overflow: "unset",
          delay: 1,
          duration: 0,
        });
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  // get api data
  useEffect(() => {
    const handleSetData = (data) => {
      dispatch(initiateData(data));
    };
    const res = axios.get("https://api.npoint.io/8170167729955bc6815a");
    res.then((res) => handleSetData(res.data));
  }, [dispatch]);

  return (
    <div ref={scope}>
      <Navbar />
      <NavMenu />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
