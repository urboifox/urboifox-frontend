import { useSelector } from "react-redux";
import "./style.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import TextSection from "../TextSection";
import { nanoid } from "@reduxjs/toolkit";

const Work = () => {
  const scope = useRef(null);
  const sliderOne = useRef(null);
  const sliderTwo = useRef(null);
  const projects = useSelector((state) => state.websiteData.data.work);
  const doubleProjects = projects?.concat(...projects);

  useEffect(() => {
    const imgs = document.querySelectorAll(".hover-reveal");
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      imgs?.forEach((img) => {
        img.style.left = `${clientX + 40}px`;
        img.style.top = `${clientY + 20}px`;
      });
    });
  }, [projects]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--products-length", projects?.length);
  });

  return (
    <div className="min-h-screen pt-32 md:pt-40" ref={scope}>
      <div className="mb-20">
        <TextSection>
          <span>Explore</span>
          <span>My projects</span>
        </TextSection>
      </div>
      <div className="cont mx-auto mb-10 md:mb-40 overflow-hidden py-24">
        <div className="rotate-6">
          <div>
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
                    <Link to={project.link} target="_blank">
                      <img src={project.img} alt={project.title} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="cont mx-auto px-4 md:px-10 mb-20 flex flex-col gap-5">
        {projects?.map((project) => {
          return (
            <div key={project.id}>
              <Link
                className="cursor-default peer h-fit relative z-10 flex w-fit"
                to={`/work/${project.id}`}
              >
                <p className="text-[var(--main-color-dimmed)] w-fit hover:text-[var(--main-color)] transition-colors duration-500 font-light text-xl md:text-6xl">
                  <span className="text-[var(--main-color-dimmed)]">
                    {project.id}.
                  </span>{" "}
                  {project.title}
                </p>
              </Link>
              <div className="pointer-events-none hover-reveal opacity-0 transition-opacity duration-300  md:peer-hover:opacity-100 fixed w-80 h-44 left-1/2 top-1/2 z-50">
                <div
                  className="hover-reveal-img h-full w-full relative"
                  style={{ backgroundImage: `url(${[project.img]})` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
