import { useDispatch, useSelector } from "react-redux";
import { ChevronBottom } from "../../assets/icons";
import { setSelected, setWasNull } from "../../redux/slices/aboutSlice";
import TimeLineItem from "../TimeLineItem";

export default function EducationPage() {
  const selected = useSelector((state) => state.about.selected);
  const timeLines = useSelector(
    (state) => state.websiteData.data.about.education
  );
  const dispatch = useDispatch();

  const handleClick = (val) => {
    if (selected === null && typeof val === "number") {
      dispatch(setWasNull(true));
      dispatch(setSelected(val));
    } else if (val === null) {
      dispatch(setWasNull(false));
      dispatch(setSelected(val));
    } else {
      dispatch(setSelected(val));
    }
  };

  return (
    <>
      <div className="relative">
        <div className="link" onClick={() => handleClick(null)}>
          <ChevronBottom
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 md:w-12 stroke-[var(--main-color)] rotate-90`}
          />
        </div>
        <div
          className={`ml-10 md:ml-20 sectionHeading fadeIn text-[var(--main-color-dimmed)] block md:self-start max-w-[80rem] tracking-wide w-full mx-auto font-main font-thin  px-5 text-2xl md:text-5xl lg:text-5xl capitalize`}
        >
          <h2 className="w-max">Education</h2>
        </div>
      </div>

      <article className="w-full min-h-screen my-20 flex items-start justify-center py-10">
        <div className=" timeLineHolder">
          {timeLines.map((timeline) => {
            return <TimeLineItem key={timeline.title} tl={timeline} />;
          })}
        </div>
      </article>
    </>
  );
}
