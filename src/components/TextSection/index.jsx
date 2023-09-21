import "./style.scss";
export default function TextSection({ first, second, third }) {
  return (
    <div className="textSection relative cont mx-auto px-4 md:px-10">
      <h2 className="text-[var(--main-color-dimmed)] relative text-center md:text-left gap-2 md:gap-10 flex flex-col text-2xl md:text-8xl lg:text-[10rem] font-light link uppercase">
        <div>{first || ""}</div>
        <div>{second || ""}</div>
        <div>{third || ""}</div>
      </h2>
    </div>
  );
}
