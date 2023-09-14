import { useSelector } from "react-redux";
import "./style.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import TextSection from "../TextSection";
import { nanoid } from "@reduxjs/toolkit";

const Work = () => {
  const scope = useRef(null);
  // const loading = useSelector((state) => state.load.loading);
  const sliderOne = useRef(null);
  const sliderTwo = useRef(null);
  const projects = useSelector((state) => state.websiteData.data.work);
  const doubleProjects = projects?.concat(...projects);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(sliderOne.current, {
  //       x: "-30%",
  //       y: "-20%",
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: sliderOne.current,
  //         scrub: 1,
  //         start: "top bottom",
  //         end: "bottom top",
  //       },
  //     });
  //     gsap.to(sliderTwo.current, {
  //       x: "-10%",
  //       y: "50%",
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: sliderTwo.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: 1,
  //       },
  //     });
  //   }, scope);

  //   return () => {
  //     ctx.revert();
  //   };
  // }, [sliderOne, sliderTwo]);

  return (
    <div
      className="pt-32 md:pt-40 cont mx-auto h-[500vh] overflow-hidden"
      ref={scope}
    >
      <div className="mb-20 md:mb-96">
        <TextSection first={"Explore"} second={"My projects"} />
      </div>
      <div className="rotate-6">
        <div className="mt-40">
          <div ref={sliderOne} className="slider">
            {doubleProjects?.map((project) => {
              return (
                <div key={nanoid()} className="overflow-hidden rounded-lg">
                  <Link to={project.link} target="_blank">
                    <img src={project.img} alt={project.title} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" mt-10">
          <div
            ref={sliderTwo}
            className="flex-row-reverse slider sliderReverse"
          >
            {doubleProjects?.map((project) => {
              return (
                <div key={nanoid()} className="overflow-hidden rounded-lg">
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
