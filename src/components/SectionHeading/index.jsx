import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
/* eslint-disable react/prop-types */
const SectionHeading = ({ text, className }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const el = useRef(null);
  const screenWidth = useSelector((state) => state.screen.width);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { x: 0, opacity: 0 },
        {
          x: screenWidth > 767 ? 100 : 20,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el.current,
            start: "top bottom",
            end: screenWidth > 767 ? "bottom 0" : "bottom center",
            scrub: 1,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [screenWidth, text]);
  return (
    <div
      ref={el}
      className={`sectionHeading fadeIn ${
        darkTheme ? "text-light" : "text-dark"
      } block md:self-start max-w-[80rem] tracking-wide w-full mx-auto font-main font-thin  px-5 text-2xl md:text-5xl lg:text-5xl capitalize ${className}`}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default SectionHeading;
