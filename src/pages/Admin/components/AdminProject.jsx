import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../components/Icons";
import { addToDelete } from "../../../redux/slices/pendingUpdatesSlice";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../redux/slices/websiteDataSlice";
import { routeTypes } from "../../../utils/constants";

export default function AdminProject({ project }) {
  const dispatch = useDispatch();
  const handleDelete = (projectId) => {
    dispatch(addToDelete({ id: projectId, type: routeTypes.PROJECTS }));
    dispatch(deleteProject(projectId));
  };

  return (
    <div className="bg-transparent">
      <Link to={`/work/${project._id}`}>
        <img src={project.img} alt={project.title} />
      </Link>
      <div className="text-xs flex py-2 items-center justify-between">
        <p>{project.title}</p>
        <div className="flex items-center gap-2">
          <div className="link">
            <EditIcon
              className={
                "w-5 stroke-light transition-colors duration-200 hover:stroke-neutral-500"
              }
            />
          </div>
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
