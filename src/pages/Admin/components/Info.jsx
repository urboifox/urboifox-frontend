import { useSelector } from "react-redux";
import AdminInfo from "./AdminInfo";
import Skeleton from "react-loading-skeleton";

export default function Info() {
  const info = useSelector((state) => state.websiteData.info);
  const education = info.filter((i) => i.type === "education");
  const experience = info.filter((i) => i.type === "experience");
  return (
    <div className="w-full flex justify-center">
      <div className="timeLineHolder">
        {info.length ? (
          <>
            {education.map((e) => {
              return <AdminInfo key={e._id} info={e} />;
            })}
            {experience.map((e) => {
              return <AdminInfo key={e._id} info={e} />;
            })}
          </>
        ) : (
          <>
            {new Array(12).fill(0).map((_, i) => {
              return (
                <div key={i} className="aspect-video timeLine">
                  <Skeleton className="!w-40 h-full" />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
