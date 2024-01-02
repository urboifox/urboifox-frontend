import { useSelector } from "react-redux";
import AdminSkill from "./AdminSkill";
import Skeleton from "react-loading-skeleton";

export default function Skills() {
  const skills = useSelector((state) => state.websiteData.skills);

  return (
    <div className="w-full adminSkillsGrid grid gap-4 md:gap-10">
      {skills.length
        ? skills.map((skill, i) => {
            return (
              <div key={i}>
                <AdminSkill skill={skill} />
              </div>
            );
          })
        : new Array(20).fill(0).map((_, i) => {
            return (
              <div key={i} className="aspect-square">
                <Skeleton className="w-full h-full" />
              </div>
            );
          })}
    </div>
  );
}
