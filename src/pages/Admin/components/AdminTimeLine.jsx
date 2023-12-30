import { Link } from "react-router-dom";
import { EditIcon } from "../../../components/Icons";
export default function AdminTimeLine({ tl }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="timeLine">
      <Link to={`/admin/information/${tl._id}`} className="group">
        <span>
          <EditIcon
            className={`w-5 stroke-light group-hover:stroke-dimmed transition-colors duration-200`}
          />
        </span>
      </Link>
      <span>
        {tl.startYear} -{" "}
        {(tl.endYear < year ? tl.endYear : "Present") || "Present"}
      </span>
      <h2>{tl.title}</h2>
      <h3>{tl.place}</h3>
    </div>
  );
}
