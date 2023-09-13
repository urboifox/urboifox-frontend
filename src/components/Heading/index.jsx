import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { handleTagsAnimation } from "../../functions";
import "./style.scss";

const Heading = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const screenWidth = useSelector((state) => state.screen.width);
  const openTag = useRef(null);
  const closeTag = useRef(null);
  const scope = useRef(null);
  const theO = useRef(null);
  const theO2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const oElement = theO.current;
      const oElement2 = theO2.current;
      const oBounds = oElement?.getBoundingClientRect();

      const oCenterX = oBounds?.left + oBounds?.width / 2;
      const oCenterY = oBounds?.top + oBounds?.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const angle = Math.atan2(mouseY - oCenterY, mouseX - oCenterX);

      const maxDistance = Math.min(oBounds?.width, oBounds?.height) / 2.5;

      const offsetX = Math.cos(angle) * maxDistance;
      const offsetY = Math.sin(angle) * maxDistance;
      if (screenWidth > 767) {
        oElement?.animate(
          {
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          },
          { duration: 1000, fill: "forwards" }
        );
        oElement2?.animate(
          {
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
    };
    document.addEventListener("mousemove", (e) => handleMouseMove(e));
    return () => {
      document.removeEventListener("mousemove", (e) => handleMouseMove(e));
    };
  }, [screenWidth]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingTl = gsap.timeline();

      headingTl.to("h1", {
        y: screenWidth > 1440 ? 100 : 50,
        ease: "none",
        scrollTrigger: {
          trigger: "h1",
          scrub: true,
          start: "top 35%",
          end: "150% top",
        },
      });
      handleTagsAnimation(openTag.current, -20);
      handleTagsAnimation(closeTag.current, 20);
    }, scope);
    return () => {
      ctx.revert();
    };
  }, [screenWidth]);
  return (
    <div ref={scope} className="wrapper headingContainer font-main">
      <h1
        className={`animateUp m-0 lg:mainHeading link text-7xl md:text-8xl lg:text-[10rem] font-light`}
      >
        <span ref={openTag} className="tag">
          {"<"}
        </span>
        <motion.span
          className={`headingText font-thin inline-block textAnimate tracking-tighter transition-colors duration-500`}
        >
          F
          <span className="theO">
            <span
              className={`${
                darkTheme ? "bg-light" : "bg-dark"
              } theOSon max-md:!translate-x-0`}
            >
              <span
                className={`${!darkTheme ? "bg-light" : "bg-dark"}`}
                ref={theO}
              ></span>
            </span>
            <span
              className={`bg-[var(--main-color)] theOSon2 max-md:!translate-x-0`}
            >
              <span
                className={`${!darkTheme ? "bg-light" : "bg-dark"}`}
                ref={theO2}
              ></span>
            </span>
            o
          </span>
          x
        </motion.span>
        {` `}
        <span ref={closeTag} className="tag">
          {" /"}
          <span className="tag ">{">"}</span>
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
