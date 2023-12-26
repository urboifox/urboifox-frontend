import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import { handleFocus, handleBlur } from "../utils/formFunctions";
import axios from "../utils/axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export default function Login() {
  const { data, handleChange } = useForm({
    usernameOrEmail: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [wrongCreds, setWrongCreds] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) {
      navigate("/admin");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWrongCreds(false);
    setLoading(true);
    axios
      .post("/auth/login", data)
      .then((res) => res.data.data.token)
      .then((token) => {
        setCookie("token", token);
        navigate("/admin");
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          setWrongCreds(err.response.data.error);
        }
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="hasForm z-50 relative h-screen w-full">
      <form
        onSubmit={handleSubmit}
        className="flex-col gap-6 flex items-center w-full max-md:px-4 max-w-md md:w-1/2 mx-auto h-full justify-center"
        encType="multipart/form-data"
      >
        {wrongCreds && (
          <span className="text-red-600 mb-2 text-base font-medium">
            {wrongCreds}
          </span>
        )}
        <div className="link input">
          <input
            required
            autoComplete="false"
            autoCorrect="false"
            type="text"
            name="usernameOrEmail"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={data.usernameOrEmail}
          />
          <label htmlFor="usernameOrEmail">Username</label>
        </div>
        <div className="link input">
          <input
            required
            autoComplete="false"
            autoCorrect="false"
            type="password"
            name="password"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={data.password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          disabled={loading}
          className={` text-light border-light before:bg-light md:hover:text-dark hover:border-ligh cursor-none py-4 px-12 uppercase border-[1px] font-extralight transition-all text-base duration-300 relative hover:before:origin-left hover:before:scale-x-100 primary-btn`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}
