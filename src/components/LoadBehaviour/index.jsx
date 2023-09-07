import { useEffect } from "react";
import { useLocation } from "react-router";
import { lenis } from "../../lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LoadBehaviour = () => {
  window.onbeforeunload = function () {
    lenis.stop();
    setTimeout(() => {
      window.scrollTo(0, 0);
      lenis.start();
    }, 500);
  };
  const location = useLocation();
  useEffect(() => {
    lenis.stop();
    setTimeout(() => {
      window.scrollTo(0, 0);
      lenis.start();
    }, 500);
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return null;
};

export default LoadBehaviour;
