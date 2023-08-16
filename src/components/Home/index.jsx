import { useEffect, useRef } from "react";
import gsap, { Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronButton } from "../";
import { motion } from "framer-motion";
import "./style.scss";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapperTl = gsap.timeline();
      const headingTl = gsap.timeline();
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

      headingTl.to("h1", {
        y: 70,
        ease: "none",
        scrollTrigger: {
          trigger: "h1",
          scrub: 1,
          start: "top 40%",
          end: "bottom top",
          pin: false,
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
      <h1 className="m-0 lg:mainHeading link text-7xl md:text-9xl font-cursive font-extralight text-dimmed">
        {"<"}
        <motion.span
          drag
          dragSnapToOrigin
          dragConstraints={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          className="font-medium inline-block text-white textAnimate"
        >
          Fox
        </motion.span>
        {" />"}
      </h1>
      <div className="link absolute top-[20%] left-10 md:left-20 text-dimmed text-xs md:text-base font-extralight opacity-20 transition-all duration-500 md:hover:opacity-100">
        {"<p>"}
        <br />
        <span className="max-md:w-[80%] max-w-sm inline-block translate-x-5">
          Web developer with a relentless drive for excellence skilled in
          creating and maintaining functional and responsive web applications
          and websites.
        </span>
        <br />
        {"</p>"}
      </div>
      <div className="ml-10 link absolute bottom-[20%] right-20 text-dimmed text-xs md:text-base font-extralight opacity-20 transition-all duration-500 lg:hover:opacity-100">
        {"<p>"}
        <br />
        <span className="max-w-sm inline-block translate-x-5">
          Proficient in the latest web technologies and frameworks, continuously
          expanding my skill set to stay at the forefront of the industry.
        </span>
        <br />
        {"</p>"}
      </div>
      <div className="left-5 bottom-5 lg:-left-12 lg:-bottom-48 absolute">
        <ChevronButton />
      </div>
    </div>
  );
};

export default Home;
