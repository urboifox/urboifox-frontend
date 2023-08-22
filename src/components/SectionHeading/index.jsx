import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsapFadeIn, gsapMoveRight } from "../../functions";
import { gsap } from "gsap";

/* eslint-disable react/prop-types */
const SectionHeading = ({ text }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const el = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsapMoveRight(el);
      gsapFadeIn(el);
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div
      ref={el}
      className={`sectionHeading fadeIn ${
        darkTheme ? "text-light" : "text-dark"
      } block md:self-start max-w-[80rem] tracking-wide w-full mx-auto mb-32 font-main font-thin link px-5 text-2xl md:text-5xl lg:text-5xl capitalize`}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default SectionHeading;
