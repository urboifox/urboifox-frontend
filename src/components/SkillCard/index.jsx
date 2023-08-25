import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const SkillCard = ({ skill }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      className={`${
        darkTheme ? "bg-light text-dark" : "bg-dark text-light"
      } link flex gap-3 items-center justify-center min-w-[18rem] rounded-sm px-5 py-10`}
    >
      <div className="w-7">
        <img
          className="max-w-full object-contain"
          src={skill.img}
          alt={skill.name}
        />
      </div>
      <div
        className={`${
          darkTheme ? "font-normal" : "font-light"
        } uppercase text-md`}
      >
        {skill.name}
      </div>
    </div>
  );
};

export default SkillCard;
