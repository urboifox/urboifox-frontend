import { handleFocus, handleBlur } from "../../../utils/formFunctions";
import useForm from "../../../hooks/useForm";
import AdminButton from "../../../components/layouts/components/AdminButton";
import { useRef, useState } from "react";
import { objectToFormData } from "../../../utils/objectToFormData";
import axios from "../../../utils/axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ChevronBottom } from "../../../components/Icons";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../redux/slices/websiteDataSlice";
export default function AddProject() {
  const [cookies] = useCookies(["token"]);
  const dispatch = useDispatch();
  const { data, handleChange, resetForm } = useForm({
    title: "",
    repo: "",
    link: "",
    client: "",
    date: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const img = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = objectToFormData(data);

    if (cookies.token) {
      axios
        .post("/projects", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${cookies.token}`,
          },
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          document
            .querySelectorAll(".active")
            .forEach((e) => e.classList.remove("active"));
          resetForm();
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
      <Link to={"/admin?page=projects"} className="w-max mb-10 flex">
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
        <div className="input">
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
        <div className="input">
          <label htmlFor="repo">Repo</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.repo}
            onChange={handleChange}
            required
            type="text"
            name="repo"
          />
        </div>
        <div className="input">
          <label htmlFor="link">Link</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.link}
            onChange={handleChange}
            required
            type="text"
            name="link"
          />
        </div>
        <div className="input">
          <label htmlFor="client">Client</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.client}
            onChange={handleChange}
            type="text"
            name="client"
          />
        </div>
        <div className="input date">
          <label htmlFor="date">Date</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.date}
            onChange={handleChange}
            required
            type="date"
            name="date"
          />
        </div>
        <div className="input">
          <label htmlFor="description">Description</label>
          <textarea
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={data.description}
            onChange={handleChange}
            name="description"
            className="!h-40"
            required
          ></textarea>
        </div>
        <input
          required
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
            {loading ? "Adding..." : "Add"}
          </AdminButton>
        </div>
      </form>
    </main>
  );
}
