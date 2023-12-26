import { useSelector } from "react-redux";
import AdminSkill from "./AdminSkill";

export default function Skills() {
  const skills = useSelector((state) => state.websiteData.skills);

  return (
    <div className="w-full adminSkillsGrid grid gap-4 md:gap-10">
      {skills.map((skill, i) => {
        return (
          <div key={i}>
            <AdminSkill skill={skill} />
          </div>
        );
      })}
    </div>
  );
}
