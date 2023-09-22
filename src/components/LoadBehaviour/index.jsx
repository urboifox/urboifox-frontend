import { useEffect } from "react";
import { useLocation } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LoadBehaviour = () => {
  window.onbeforeunload = function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  };
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return null;
};

export default LoadBehaviour;
