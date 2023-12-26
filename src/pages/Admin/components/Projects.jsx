import { useSelector } from "react-redux";
import AdminProject from "./AdminProject";

export default function Projects() {
  const projects = useSelector((state) => state.websiteData.projects);

  return (
    <div className="w-full projectsGrid grid gap-4 gap-y-5">
      {projects.map((project, i) => {
        return (
          <div key={i}>
            <AdminProject project={project} />
          </div>
        );
      })}
    </div>
  );
}
