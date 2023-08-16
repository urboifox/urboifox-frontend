import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingTl = gsap.timeline();
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
    <div ref={scope} className="headingContainer">
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
    </div>
  );
};

export default Heading;

/*
import { Draggable } from "gsap/Draggable";

function handleMouseMove(e) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let positionX = e.clientX / width - 0.55;
      let positionY = e.clientY / height - 0.55;
      gsap.to("tilted", {
        rotationY: positionX * 100,
        rotationX: -positionY * 100,
        ease: "none",
      });
    }

document.addEventListener("mousemove", (e) => handleMouseMove(e));



document.removeEventListener("mousemove", (e) => handleMouseMove(e));


*/
