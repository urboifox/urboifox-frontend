export default function TimeLineItem({ tl }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="timeLine">
      <span>
        {tl.startDate} -{" "}
        {(tl.endDate < year ? tl.endDate : "Present") || "Present"}
      </span>
      <h2>{tl.title}</h2>
      <h3>{tl.place}</h3>
    </div>
  );
}
