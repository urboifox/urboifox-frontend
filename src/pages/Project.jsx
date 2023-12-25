import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ArrowRight, Code, GoToLink } from "../components/Icons";

export default function Project() {
  const allProjects = useSelector((state) => state.websiteData.projects);
  const { id } = useParams();

  const currentIndex = allProjects.findIndex((project) => project._id === id);
  const project = allProjects[currentIndex];

  const nextProject = allProjects[currentIndex + 1] || allProjects?.at(0);

  return (
    <div className="projectPage md:mb-10 flex flex-col items-center cont mx-auto pt-28 md:pt-32 relative">
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full px-4 md:px-10 md:mt-10 mb-10 md:mb-20">
        <div>
          <h1 className="mb-5 md:mb-10 md:max-w-4xl text-[var(--main-color)] link font-light capitalize text-3xl w-full md:text-8xl">
            {project?.title}
          </h1>
          <div className="projectInfo flex items-center gap-10">
            <div>
              <h6>Date</h6>
              <p>{project?.date}</p>
            </div>
            <div>
              <h6>Client</h6>
              <p>{project?.client}</p>
            </div>
          </div>
          <div className="flex items-center mt-5 gap-3">
            <Link to={project?.repo} target="_blank">
              <Code
                className={`w-9 transition-color duration-500 stroke-primary-100 md:hover:stroke-[var(--main-color)]`}
              />
            </Link>
            <Link to={project?.link} target="_blank">
              <GoToLink
                className={`w-6 transition-color duration-500 stroke-primary-100 md:hover:stroke-[var(--main-color)]`}
              />
            </Link>
          </div>
        </div>
        <Link to={`/work/${nextProject?._id}`} className="rightCol group">
          <div>
            <h2 className="flex items-center gap-5">
              Next Project{" "}
              <ArrowRight
                className={`stroke-[var(--sec-color)] w-8 md:group-hover:stroke-[var(--main-color)] transition-colors duration-500`}
              />
            </h2>
            <p className="link md:group-hover:text-[var(--main-color)]">
              {nextProject?.title}
            </p>
          </div>
        </Link>
      </div>
      <div className="link max-w-lg mb-10 group md:mb-20 px-4 md:px-10">
        <p className="text-[var(--sec-color)] md:group-hover:text-[var(--main-color)] font-extralight text-sm md:text-lg tracking-wide leading-relaxed">
          {project?.description}
        </p>
      </div>
      <Link to={project?.link} target="_blank" className=" w-full relative">
        <img
          src={project?.img}
          className="w-full md:w-[80%] mx-auto max-h-screen"
          alt={project?.title}
        />
      </Link>
    </div>
  );
}
