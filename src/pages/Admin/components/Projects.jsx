import { useSelector } from "react-redux";
import AdminProject from "./AdminProject";
import Skeleton from "react-loading-skeleton";

export default function Projects() {
  const projects = useSelector((state) => state.websiteData.projects);

  return (
    <div className="w-full projectsGrid grid gap-4 gap-y-5">
      {projects.length ? (
        projects.map((project, i) => {
          return (
            <div key={i}>
              <AdminProject project={project} />
            </div>
          );
        })
      ) : (
        <>
          {new Array(12).fill(0).map((_, i) => {
            return (
              <div key={i} className="aspect-video">
                <Skeleton className="w-full h-full" />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
