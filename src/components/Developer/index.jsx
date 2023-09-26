import { useLocation } from "react-router";
import NotFound from "../NotFound";

export default function Developer() {
  const location = useLocation();
  const hash = location.hash;
  localStorage.setItem("developer", hash.includes("false") ? false : true);
  return <NotFound />;
}
