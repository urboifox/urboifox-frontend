import NotFound from "../NotFound";

export default function Developer() {
  localStorage.setItem("developer");
  return <NotFound />;
}
