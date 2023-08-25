import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const SkillCard = ({ skill }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      className={`${
        darkTheme
          ? "text-light from-[#131313] to-[#191919]"
          : "text-dark from-[#d2d2d2] to-[#dadada]"
      } link flex gap-3 bg-gradient-to-tr items-center justify-center min-w-[18rem] rounded-md py-7 md:py-10`}
    >
      <div className="w-7">
        <img
          className="max-w-full object-contain"
          src={skill.img}
          alt={skill.name}
        />
      </div>
      <div className={`font-medium uppercase text-md`}>{skill.name}</div>
    </div>
  );
};

export default SkillCard;
