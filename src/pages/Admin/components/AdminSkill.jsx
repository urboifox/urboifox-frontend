import { useDispatch } from "react-redux";
import { DeleteIcon, EditIcon, HomeIcon } from "../../../components/Icons";
import {
  addToDelete,
  addToUpdate,
} from "../../../redux/slices/pendingUpdatesSlice";
import { routeTypes } from "../../../utils/constants";
import {
  deleteSkill,
  updateSkill,
} from "../../../redux/slices/websiteDataSlice";

export default function AdminSkill({ skill }) {
  const dispatch = useDispatch();
  const handleDelete = (skillId) => {
    dispatch(addToDelete({ id: skillId, type: routeTypes.SKILLS }));
    dispatch(deleteSkill(skillId));
  };
  const handleEditHomeSkills = () => {
    dispatch(
      addToUpdate({
        id: skill._id,
        type: routeTypes.SKILLS,
        data: { displayOnHomePage: !skill.displayOnHomePage },
      })
    );
    dispatch(
      updateSkill({
        ...skill,
        displayOnHomePage: !skill.displayOnHomePage,
      })
    );
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className=" ">
        <img
          src={skill.img}
          className="object-contain w-40 aspect-square max-w-full"
          alt={skill.name}
        />
      </div>
      <div className="text-base flex-col gap-4 flex py-2 items-center justify-between">
        <p>{skill.name}</p>
        <div className="flex items-center gap-2">
          <button onClick={handleEditHomeSkills}>
            <HomeIcon
              className={`w-6 stroke-${
                skill.displayOnHomePage ? "primary-100" : "light"
              } transition-colors duration-200 hover:stroke-neutral-500`}
            />
          </button>
          <button className="link">
            <EditIcon
              className={
                "w-6 stroke-light transition-colors duration-200 hover:stroke-neutral-500"
              }
            />
          </button>
          <button onClick={() => handleDelete(skill._id)} className="link">
            <DeleteIcon
              className={
                "w-6 fill-red-600 transition-colors duration-200 hover:fill-neutral-500"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
