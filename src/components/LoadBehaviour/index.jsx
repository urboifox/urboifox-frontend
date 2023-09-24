import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LoadBehaviour = () => {
  const location = useLocation();

  const lenis = useLenis();

  // window.onbeforeunload = function () {
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 500);
  // };

  useEffect(() => {
    lenis?.stop();
    setTimeout(() => {
      window.scrollTo(0, 0);
      lenis?.start();
    }, 500);
    ScrollTrigger.refresh();
  }, [location.pathname, lenis]);

  return null;
};

export default LoadBehaviour;
