import { useSelector } from "react-redux";
import SkillGridCard from "./components/SkillGridCard";
import { Fragment } from "react";
import "./style.scss";
import { motion } from "framer-motion";
export default function SkillsPage() {
  const skills = useSelector((state) => state.websiteData.skills);

  return (
    <motion.div className="aboutContainer">
      <div className="cont mx-auto relative aboutHeading">
        <div
          className={`sectionHeading fadeIn text-[var(--main-color-dimmed)] block md:self-start max-w-[80rem] tracking-wide w-full font-main font-thin  px-5 text-2xl md:text-5xl lg:text-5xl capitalize`}
        >
          <h2 className="w-max">Skills</h2>
        </div>
      </div>
      <div className="skillsGrid cont mx-auto">
        {skills?.map((skill) => {
          return (
            <Fragment key={skill._id}>
              <SkillGridCard skill={skill} />
            </Fragment>
          );
        })}
        <div className="animate-bg skillGridCard text-center">
          <span className="joint -top-px -left-px"></span>
          <span className="joint -top-px -right-px"></span>
          <span className="joint -bottom-px -left-px"></span>
          <span className="joint -bottom-px -right-px"></span>& Still Learning
        </div>
      </div>
    </motion.div>
  );
}
