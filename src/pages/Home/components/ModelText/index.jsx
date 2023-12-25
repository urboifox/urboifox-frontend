import { useEffect, useRef } from "react";
import "./style.scss";
import gsap from "gsap";
export default function ModelText({ text }) {
  const scope = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#model-text > div", {
        yPercent: 250,
        duration: 1,
        scrollTrigger: {
          trigger: "#model-text > div",
          start: "50% 50%",
          end: "80% top",
          scrub: 1,
        },
      });
    }, scope);
    return () => ctx.revert();
  }, []);
  return (
    <div id="model-text" ref={scope}>
      <div>{text}</div>
      <div className="blur-text">{text}</div>
      <div className="z-10 front-text">{text}</div>
    </div>
  );
}
