import { useSelector } from "react-redux";
import AdminInfo from "./AdminInfo";

export default function Info() {
  const info = useSelector((state) => state.websiteData.info);
  const education = info.filter((i) => i.type === "education");
  const experience = info.filter((i) => i.type === "experience");
  return (
    <div className="w-full flex justify-center">
      <div className="timeLineHolder">
        {education.map((e) => {
          return <AdminInfo key={e._id} info={e} />;
        })}
        {experience.map((e) => {
          return <AdminInfo key={e._id} info={e} />;
        })}
      </div>
    </div>
  );
}
