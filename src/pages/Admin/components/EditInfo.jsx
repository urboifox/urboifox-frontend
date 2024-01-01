import { handleFocus, handleBlur } from "../../../utils/formFunctions";
import useForm from "../../../hooks/useForm";
import AdminButton from "../../../components/layouts/components/AdminButton";
import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ChevronBottom } from "../../../components/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slices/websiteDataSlice";
export default function EditInfo() {
  const [cookies] = useCookies(["token"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { infoId } = useParams();
  const allInfo = useSelector((state) => state.websiteData.info);
  const [type, setType] = useState("experience");

  const currentIndex = allInfo.findIndex((info) => info._id === infoId);
  const info = allInfo[currentIndex];

  const { data, handleChange, setData } = useForm({
    title: "Loading...",
    place: "Loading...",
    startYear: "Loading...",
    endYear: "Loading...",
  });

  useEffect(() => {
    setData({
      title: info?.title,
      place: info?.place,
      startYear: info?.startYear,
      endYear: info?.endYear,
    });
    setType(info?.type);
  }, [info, setData]);

  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    data.type = type;

    if (cookies.token) {
      axios
        .patch(`/info/${infoId}`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          dispatch(fetchData());
        });
    } else {
      navigate("/login");
    }
  }

  return (
    <main className="hasForm">
      <Link to={"/admin?page=information"} className="w-max mb-10 flex">
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
          <label htmlFor="title">Title</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.title}
            onChange={handleChange}
            required
            type="text"
            name="title"
          />
        </div>
        <div className="input active">
          <label htmlFor="place">Place</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.place}
            onChange={handleChange}
            required
            type="text"
            name="place"
          />
        </div>
        <div className="input active">
          <label htmlFor="startYear">Start Year</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.startYear}
            onChange={handleChange}
            required
            type="number"
            name="startYear"
            maxLength={4}
          />
        </div>
        <div className="input active">
          <label htmlFor="endYear">End Year</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.endYear}
            onChange={handleChange}
            type="number"
            name="endYear"
            maxLength={4}
          />
        </div>
        <div className="flex w-max gap-4">
          <AdminButton
            type="button"
            onClick={() => setType("experience")}
            active={type === "experience"}
          >
            Experience
          </AdminButton>
          <AdminButton
            type="button"
            onClick={() => setType("education")}
            active={type === "education"}
          >
            Education
          </AdminButton>
        </div>
        <div
          className={`${
            loading ? "opacity-70" : ""
          } transition-all duration-200 hover:opacity-90`}
        >
          <AdminButton type="submit" disabled={loading} basic={true}>
            {loading ? "Updating..." : "Update"}
          </AdminButton>
        </div>
      </form>
    </main>
  );
}
