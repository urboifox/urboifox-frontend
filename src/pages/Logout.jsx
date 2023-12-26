import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export default function Logout() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  useEffect(() => {
    if (cookie.token) {
      setCookie("token", null, { maxAge: 0 });
    }
    navigate("/");
  }, [cookie.token, navigate, setCookie]);
  return null;
}
