import { useEffect, useRef } from "react";
import "./style.scss";
import gsap from "gsap";
export default function TextSection({ children }) {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const textElements = gsap.utils.toArray(".textSection h2 > span");

      textElements.forEach((text) => {
        gsap.to(text, {
          backgroundSize: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "center 80%",
            end: "center 20%",
            scrub: true,
          },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="textSection mx-auto cont">
      <h2 className="text-[var(--main-color-dimmed)] text-center md:text-left gap-2 md:gap-10 flex flex-col text-2xl md:text-8xl lg:text-[10rem] font-light link uppercase">
        {children}
      </h2>
    </div>
  );
}
