import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const openTag = useRef(null);
  const closeTag = useRef(null);
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingTl = gsap.timeline();

      function handleTagsAnimation(e, direction) {
        const tagsTl = gsap.timeline();
        tagsTl
          .to(e, {
            x: direction === "left" ? -50 : 50,
            duration: 0.8,
            delay: 1,
          })
          .to(e, {
            x: 0,
            duration: 0.1,
            ease: "none",
          });
      }

      headingTl.to("h1", {
        y: window.innerWidth < 767 ? 50 : 100,
        ease: "none",
        scrollTrigger: {
          trigger: "h1",
          scrub: 1,
          start: "top 40%",
          end: "bottom top",
          pin: false,
        },
      });
      handleTagsAnimation(openTag.current, "left");
      handleTagsAnimation(closeTag.current, "right");
    }, scope);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={scope} className="headingContainer">
      <h1
        className={`${
          darkTheme ? "text-dimmed" : "text-darkDimmed"
        }  m-0 lg:mainHeading link text-7xl md:text-9xl font-cursive font-extralight`}
      >
        <span
          ref={openTag}
          className="inline-flex transition-colors duration-500"
        >
          {"<"}
        </span>
        <motion.span
          drag
          dragSnapToOrigin
          dragConstraints={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
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
