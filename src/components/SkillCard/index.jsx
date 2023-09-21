import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
/* eslint-disable react/prop-types */
const SkillCard = ({ skill }) => {
  const card = useRef(null);
  const screenWidth = useSelector((state) => state.screen.width);

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
      className={`
      border-[var(--main-color-dimmed)] md:hover:border-[var(--main-color)] text-[var(--sec-color)] border transition-colors duration-500 link flex gap-3 bg-gradient-to-tr items-center justify-center min-w-full md:min-w-[18rem] py-6 md:py-10`}
    >
      <div>
        <img
          draggable={false}
          className="w-8 h-8 object-contain"
          src={skill.img}
          alt={skill.name}
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
