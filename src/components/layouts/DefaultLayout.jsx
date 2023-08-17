import { Circ, gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DefaultLayout = () => {
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
