import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon, HomeIcon } from "../../../components/Icons";
import {
  addToDelete,
  addToUpdate,
} from "../../../redux/slices/pendingUpdatesSlice";
import { useDispatch } from "react-redux";
import {
  deleteProject,
  updateProject,
} from "../../../redux/slices/websiteDataSlice";
import { routeTypes } from "../../../utils/constants";

export default function AdminProject({ project }) {
  const dispatch = useDispatch();
  const handleDelete = (projectId) => {
    dispatch(addToDelete({ id: projectId, type: routeTypes.PROJECTS }));
    dispatch(deleteProject(projectId));
  };

  const handleEditHomeProjects = () => {
    dispatch(
      addToUpdate({
        id: project._id,
        type: routeTypes.PROJECTS,
        data: { displayOnHomePage: !project.displayOnHomePage },
      })
    );
    dispatch(
      updateProject({
        ...project,
        displayOnHomePage: !project.displayOnHomePage,
      })
    );
  };

  return (
    <div className="bg-transparent">
      <Link to={`/work/${project._id}`}>
        <img src={project.img} alt={project.title} />
      </Link>
      <div className="text-xs flex py-2 items-center justify-between">
        <p>{project.title}</p>
        <div className="flex items-center gap-2">
          <button onClick={handleEditHomeProjects}>
            <HomeIcon
              className={`w-5 stroke-${
                project.displayOnHomePage ? "primary-100" : "light"
              } transition-colors duration-200 hover:stroke-neutral-500`}
            />
          </button>
          <Link to={`/admin/projects/${project._id}`} className="link">
            <EditIcon
              className={
                "w-5 stroke-light transition-colors duration-200 hover:stroke-neutral-500"
              }
            />
          </Link>
          <button onClick={() => handleDelete(project._id)} className="link">
            <DeleteIcon
              className={
                "w-5 fill-red-600 transition-colors duration-200 hover:fill-neutral-500"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
