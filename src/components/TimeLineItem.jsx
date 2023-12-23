export default function TimeLineItem({ tl }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="timeLine">
      <span>
        {tl.startYear} -{" "}
        {(tl.endYear < year ? tl.endYear : "Present") || "Present"}
      </span>
      <h2>{tl.title}</h2>
      <h3>{tl.place}</h3>
    </div>
  );
}
