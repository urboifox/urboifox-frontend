import { useSelector } from "react-redux";
import SectionHeading from "../SectionHeading";
import SkillCard from "../SkillCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const skills = useSelector((state) => state.websiteData.data.skills);
  const scope = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(slider.current, {
        x: `-${288 * skills?.length - 1000}px`,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "200% bottom",
          end: "200%  top",
          scrub: 1,
          pin: true,
        },
      });
    }, scope);
    return () => {
      ctx.revert();
    };
  }, [skills]);

  return (
    <div className="mt-20 lg:mt-40" ref={scope}>
      <SectionHeading text={"Tech Stack"} />
      <div className="cont flex justify-center px-48 mx-auto">
        <div className="overflow-hidden">
          <div className="flex gap-5" ref={slider}>
            {skills?.map((skill) => {
              return <SkillCard skill={skill} key={skill.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
