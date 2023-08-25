import { useSelector } from "react-redux";
import SectionHeading from "../SectionHeading";

const Skills = () => {
  const skills = useSelector((state) => state.websiteData.data.skills);

  return (
    <div className="mt-20 lg:mt-40">
      <SectionHeading text={"Tech Stack"} />
      <div className="cont mx-auto ml-10">
        <div className="flex gap-5 overflow-hidden">
          {skills?.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex items-center justify-center bg-dark min-w-[24rem] text-light px-5 py-10"
              >
                <div className="w-10">
                  <img
                    className="max-w-full object-contain"
                    src={skill.img}
                    alt={skill.name}
                  />
                </div>
                <div>{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
