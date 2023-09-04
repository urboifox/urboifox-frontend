import { Circ, gsap } from "gsap";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";
import { ScrollBar, Navbar, NavMenu, LoadBehaviour } from "../";
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

  useEffect(() => {
    const animateUpElement = document.querySelector(".animateUp");
    const ctx = gsap.context(() => {
      const wrapperTl = gsap.timeline();
      if (animateUpElement) {
        wrapperTl
          .to(".wrapper", {
            overflow: "hidden",
            duration: 0,
          })
          .from(".animateUp", 1, {
            y: "100%",
            delay: 0.5,
            ease: Circ.Out,
            scrollTrigger: {
              trigger: ".animateUp",
              start: "top 80%",
            },
          })
          .to(".wrapper", {
            overflow: "unset",
            delay: 1.5,
            duration: 0,
          });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <LoadBehaviour />
      <ScrollBar />
      <Navbar />
      <NavMenu />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
