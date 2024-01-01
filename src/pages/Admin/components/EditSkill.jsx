import { handleFocus, handleBlur } from "../../../utils/formFunctions";
import useForm from "../../../hooks/useForm";
import AdminButton from "../../../components/layouts/components/AdminButton";
import { useEffect, useRef, useState } from "react";
import { objectToFormData } from "../../../utils/objectToFormData";
import axios from "../../../utils/axios";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ChevronBottom } from "../../../components/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slices/websiteDataSlice";
export default function EditSkill() {
  const [cookies] = useCookies(["token"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { skillId } = useParams();
  const allSkills = useSelector((state) => state.websiteData.skills);

  const currentIndex = allSkills.findIndex((skill) => skill._id === skillId);
  const skill = allSkills[currentIndex];

  const { data, handleChange, setData } = useForm({
    name: "Loading...",
  });

  useEffect(() => {
    setData({
      name: skill?.name,
    });
  }, [skill, setData]);

  const [loading, setLoading] = useState(false);
  const img = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = objectToFormData(data);
    if (cookies.token) {
      axios
        .patch(`/skills/${skillId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${cookies.token}`,
          },
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          img.current.value = "";
          setLoading(false);
          dispatch(fetchData());
        });
    } else {
      navigate("/login");
    }
  }

  return (
    <main className="hasForm">
      <Link to={"/admin?page=skills"} className="w-max mb-10 flex">
        <AdminButton basic>
          <span className="flex items-center gap-2">
            <ChevronBottom className={`w-5 stroke-dark rotate-90`} />
            Go Back
          </span>
        </AdminButton>
      </Link>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <div className="input active">
          <label htmlFor="name">Name</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.name}
            onChange={handleChange}
            required
            type="text"
            name="name"
          />
        </div>
        <input
          multiple={false}
          accept="image/*"
          type="file"
          name="img"
          ref={img}
          onChange={handleChange}
        />
        <div
          className={`${
            loading ? "opacity-70" : ""
          } transition-all duration-200 hover:opacity-90`}
        >
          <AdminButton disabled={loading} basic={true}>
            {loading ? "Updating..." : "Update"}
          </AdminButton>
        </div>
      </form>
    </main>
  );
}
