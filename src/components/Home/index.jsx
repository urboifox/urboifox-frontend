import { useEffect, useRef } from "react";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollBottom } from "../";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animateUp", {
        y: "100%",
        duration: 0.8,
        ease: Power1.easeOut,
        scrollTrigger: {
          trigger: ".animateUp",
        },
      });
    }, scope);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={scope}
      className="relative home h-screen w-full flex items-center justify-center"
    >
      <div className="wrapper">
        <h1 className="link animateUp text-9xl font-cursive font-extralight text-dimmed">
          {"<"}
          <span className="text-white textAnimate">Fox</span>
          {" />"}
        </h1>
      </div>
      <ScrollBottom />
    </div>
  );
};

export default Home;
