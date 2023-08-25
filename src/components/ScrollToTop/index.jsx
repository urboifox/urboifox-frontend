import { useEffect } from "react";
import { useLocation } from "react-router";
import { lenis } from "../../lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  window.onbeforeunload = function () {
    lenis.stop();
    window.scrollTo(0, 0);
    lenis.start();
  };
  const location = useLocation();
  useEffect(() => {
    lenis.stop();
    window.scrollTo(0, 0);
    lenis.start();
    ScrollTrigger.refresh();
  }, [location]);

  return null;
};

export default ScrollToTop;
