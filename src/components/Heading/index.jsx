import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { handleTagsAnimation } from "../../functions";
gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const bigScreen = useSelector((state) => state.screen.width);
  const openTag = useRef(null);
  const closeTag = useRef(null);
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingTl = gsap.timeline();

      headingTl.to("h1", {
        y: bigScreen > 767 ? 100 : 50,
        ease: "none",
        scrollTrigger: {
          trigger: "h1",
          scrub: true,
          start: "top 35%",
          end: "150% top",
        },
      });
      handleTagsAnimation(openTag.current, -30);
      handleTagsAnimation(closeTag.current, 30);
    }, scope);
    return () => {
      ctx.revert();
    };
  }, [bigScreen]);
  return (
    <div ref={scope} className="headingContainer font-cursive">
      <h1
        className={`${
          darkTheme ? "text-dimmed" : "text-darkDimmed"
        }  m-0 lg:mainHeading link text-7xl md:text-8xl lg:text-9xl font-light`}
      >
        <span
          ref={openTag}
          className="inline-flex transition-colors duration-500"
        >
          {"<"}
        </span>
        <motion.span
          className={`${
            darkTheme ? "text-light" : "text-dark"
          } font-medium inline-block textAnimate transition-colors duration-500`}
        >
          Fox
        </motion.span>
        {` `}
        <span
          ref={closeTag}
          className="inline-flex transition-colors duration-500"
        >
          {" />"}
        </span>
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
