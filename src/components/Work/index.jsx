import { useSelector } from "react-redux";
import "./style.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import TextSection from "../TextSection";
import gsap from "gsap";

const Work = () => {
  const scope = useRef(null);
  const loading = useSelector((state) => state.load.loading);
  const sliderOne = useRef(null);
  const sliderTwo = useRef(null);
  const projects = useSelector((state) => state.websiteData.data.work);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sliderOne.current, {
        x: "-20%",
        y: "-10%",
        ease: "none",
        scrollTrigger: {
          trigger: sliderOne.current,
          scrub: true,
        },
      });
      gsap.to(sliderTwo.current, {
        x: "-20%",
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sliderTwo.current,
          scrub: true,
        },
      });
    }, scope);

    return () => {
      ctx.revert();
    };
  }, [loading]);

  return (
    <div
      className="pt-32 md:pt-40 cont mx-auto h-[500vh] overflow-hidden"
      ref={scope}
    >
      <div className="mb-20 md:mb-96">
        <TextSection first={"Take a look"} second={"At my work"} />
      </div>
      <div>
        <div className="mt-60">
          <div ref={sliderOne} className="slider translate-y-10 rotate-6">
            {projects?.map((project) => {
              return (
                <div key={project.id}>
                  <Link to={project.link} target="_blank">
                    <img src={project.img} alt={project.title} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" -mt-10">
          <div
            ref={sliderTwo}
            className="flex-row-reverse -translate-y-10 -translate-x-[40%] slider rotate-6 "
          >
            {projects?.map((project) => {
              return (
                <div key={project.id} className="overflow-hidden rounded-lg">
                  <Link to={`/work/${project.id}}`}>
                    <img src={project.img} alt={project.title} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
