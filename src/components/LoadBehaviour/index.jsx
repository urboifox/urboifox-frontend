import { useEffect } from "react";
import { useLocation } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";

const LoadBehaviour = () => {
  const location = useLocation();

  const lenis = useLenis(() => {
    console.log(lenis);
  }, [location.pathname]);

  window.onbeforeunload = function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    }, 500);
  }, [location.pathname]);

  return null;
};

export default LoadBehaviour;
