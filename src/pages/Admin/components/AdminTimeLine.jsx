import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../components/Icons";
import { useDispatch } from "react-redux";
import { deleteInfo } from "../../../redux/slices/websiteDataSlice";
import { routeTypes } from "../../../utils/constants";
import { addToDelete } from "../../../redux/slices/pendingUpdatesSlice";
export default function AdminTimeLine({ tl }) {
  const date = new Date();
  const year = date.getFullYear();

  const dispatch = useDispatch();
  const handleDelete = (infoId) => {
    dispatch(addToDelete({ id: infoId, type: routeTypes.INFO }));
    dispatch(deleteInfo(infoId));
  };

  return (
    <div className="timeLine">
      <div className="flex items-center gap-2">
        <Link to={`/admin/information/${tl._id}`} className="group">
          <span>
            <EditIcon
              className={`w-5 stroke-light group-hover:stroke-dimmed transition-colors duration-200`}
            />
          </span>
        </Link>
        <button onClick={() => handleDelete(tl._id)} className="group">
          <span className="overflow-hidden">
            <DeleteIcon
              className={`w-5 fill-red-600 group-hover:fill-dimmed transition-colors duration-200`}
            />
          </span>
        </button>
      </div>
      <span>
        {tl.startYear} -{" "}
        {(tl.endYear < year ? tl.endYear : "Present") || "Present"}
      </span>
      <h2>{tl.title}</h2>
      <h3>{tl.place}</h3>
    </div>
  );
}
