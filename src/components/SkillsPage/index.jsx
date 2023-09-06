import { useDispatch, useSelector } from "react-redux";
import { SectionHeading, SkillGridCard } from "../";
import { Fragment } from "react";
import "./style.scss";
import { ChevronBottom } from "../../assets/icons";
import { setSelected, setWasNull } from "../../redux/slices/aboutSlice";
export default function SkillsPage() {
  const skills = useSelector((state) => state.websiteData.data.skills);
  const selected = useSelector((state) => state.about.selected);
  const dispatch = useDispatch();

  const handleClick = (val) => {
    if (selected === null && typeof val === "number") {
      dispatch(setWasNull(true));
      dispatch(setSelected(val));
    } else if (val === null) {
      dispatch(setWasNull(false));
      dispatch(setSelected(val));
    } else {
      dispatch(setSelected(val));
    }
  };
  return (
    <div className="pt-40">
      <div className="relative">
        <div className="link" onClick={() => handleClick(null)}>
          <ChevronBottom
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 md:w-12 stroke-[var(--main-color)] rotate-90`}
          />
        </div>
        <SectionHeading text={"SKills"} className={"mt-10"} />
      </div>
      <div className="skillsGrid">
        {skills.map((skill) => {
          return (
            <Fragment key={skill.id}>
              <SkillGridCard skill={skill} />
            </Fragment>
          );
        })}
        <div className="animate-bg skillGridCard">
          <span className="joint -top-px -left-px"></span>
          <span className="joint -top-px -right-px"></span>
          <span className="joint -bottom-px -left-px"></span>
          <span className="joint -bottom-px -right-px"></span>& Still Learning
        </div>
      </div>
    </div>
  );
}
