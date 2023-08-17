import { Circ, gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";

gsap.registerPlugin(ScrollTrigger);

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const localDarkTheme = localStorage.getItem("darkTheme");
  function initiateTheme() {
    if (localDarkTheme) {
      dispatch(setTheme(JSON.parse(localDarkTheme)));
    }
  }
  initiateTheme();

  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapperTl = gsap.timeline();
      wrapperTl.from(".animateUp", 1, {
        y: "100%",
        ease: Circ.Out,
        scrollTrigger: {
          trigger: ".animateUp",
          start: "top 80%",
        },
      });
      wrapperTl.to(".wrapper", {
        overflow: "unset",
        delay: 1,
        duration: 0,
      });
    }, scope);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={scope}>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
