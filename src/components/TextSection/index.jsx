import React from "react";
import "./style.scss";
export default function TextSection({ children }) {
  return (
    <div className="textSection">
      <h2 className="text-[var(--main-color-dimmed)] text-center md:text-left gap-2 md:gap-10 flex flex-col text-2xl md:text-8xl lg:text-[10rem] font-light link uppercase">
        {React.Children.map(children, (child) => (
          <div>
            <span className="mx-auto cont flex">{child}</span>
          </div>
        ))}
      </h2>
    </div>
  );
}
