import { useSelector } from "react-redux";
import { SkillCard, PrimaryButton, SectionHeading } from "../";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const skills = useSelector((state) => state.websiteData.data.skills);
  const bigScreen = useSelector((state) => state.screen.width);
  const scope = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(slider.current, {
        x: bigScreen ? `-${288 * skills?.length - 1000}px` : 0,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "150% bottom",
          end: "150%  top",
          scrub: 1,
          pin: true,
        },
      });
    }, scope);
    return () => {
      ctx.revert();
    };
  }, [skills, bigScreen]);

  return (
    <div className="mt-20 lg:mt-40" ref={scope}>
      <SectionHeading className={`mb-16`} text={"Tech Stack"} />
      <div className="cont md:px-48 mx-auto">
        <div className="md:overflow-hidden">
          <div className="flex flex-col md:flex-row gap-5" ref={slider}>
            {skills?.map((skill) => {
              return <SkillCard skill={skill} key={skill.id} />;
            })}
          </div>
        </div>
        <div className="mt-20 mx-auto w-max">
          <a href={`/public/Mohamed Ashraf - Frontend Developer.pdf`} download>
            <PrimaryButton text={`Download CV`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
