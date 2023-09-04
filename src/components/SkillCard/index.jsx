import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
/* eslint-disable react/prop-types */
const SkillCard = ({ skill }) => {
  const card = useRef(null);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const screenWidth = useSelector((state) => state.screen.width);
  const color = skill.color;

  useEffect(() => {
    card.current.style.borderColor = `${color}`;
  }, [color]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        card.current,
        { opacity: 0, x: screenWidth > 767 ? 0 : -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    }, card);

    return () => ctx.revert();
  }, [screenWidth]);

  return (
    <div
      ref={card}
      className={`${
        darkTheme
          ? "text-light from-[#131313] to-[#191919] hover:!border-dimmed"
          : "text-dark from-[#d2d2d2] to-[#dadada] hover:!border-darkDimmed"
      } 
      border-dimmed border transition-colors duration-500 link flex gap-3 bg-gradient-to-tr items-center justify-center min-w-full md:min-w-[18rem] rounded-md py-6 md:py-10`}
    >
      <div>
        <img
          className="w-6 md:w-7 object-contain"
          src={skill.img}
          alt={skill.name}
          loading="lazy"
        />
      </div>
      <div
        className={`font-normal md:font-medium uppercase text-sm md:text-md`}
      >
        {skill.name}
      </div>
    </div>
  );
};

export default SkillCard;
