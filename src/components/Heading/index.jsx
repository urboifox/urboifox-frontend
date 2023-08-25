import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { handleTagsAnimation } from "../../functions";
import "./style.scss";

const Heading = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const bigScreen = useSelector((state) => state.screen.width);
  const openTag = useRef(null);
  const closeTag = useRef(null);
  const scope = useRef(null);
  const theO = useRef(null);

  const handleMouseMove = (event) => {
    const oElement = theO.current;
    const oBounds = oElement?.getBoundingClientRect();

    const oCenterX = oBounds?.left + oBounds?.width / 2;
    const oCenterY = oBounds?.top + oBounds?.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - oCenterY, mouseX - oCenterX);

    const maxDistance = Math.min(oBounds?.width, oBounds?.height) / 1.5;

    const offsetX = Math.cos(angle) * maxDistance;
    const offsetY = Math.sin(angle) * maxDistance;
    oElement?.animate(
      {
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      },
      { duration: 1000, fill: "forwards" }
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => handleMouseMove(e));
    return () => {
      document.removeEventListener("mousemove", (e) => handleMouseMove(e));
    };
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingTl = gsap.timeline();

      headingTl.to("h1", {
        y: bigScreen > 1536 ? 100 : 50,
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
    <div ref={scope} className="wrapper headingContainer font-main">
      <h1
        className={`${
          darkTheme ? "text-dimmed" : "text-darkDimmed"
        } animateUp m-0 lg:mainHeading link text-7xl md:text-8xl lg:text-9xl font-light`}
      >
        <span
          ref={openTag}
          className="inline-flex transition-colors duration-500 tracking-tighter font-thin"
        >
          {"<"}
        </span>
        <motion.span
          className={`${
            darkTheme ? "text-light" : "text-dark"
          } font-thin inline-block textAnimate tracking-tighter transition-colors duration-500`}
        >
          F
          <span className="theO">
            <span ref={theO} className="theOSon max-md:!translate-x-0"></span>o
          </span>
          x
        </motion.span>
        {` `}
        <span
          ref={closeTag}
          className="inline-flex transition-colors duration-500 font-thin tracking-tighter"
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
