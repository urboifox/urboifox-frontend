import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./style.scss";
import { PrimaryButton, SectionHeading } from "../../../";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const SelectedWork = () => {
  const allProjects = useSelector((state) => state.websiteData.projects);
  const elements = allProjects
    .filter((e) => e.displayOnHomePage === true)
    .slice(0, 3);

  const sectionRef = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth > 767) {
        gsap.to(sectionRef.current, {
          x: "0",
          duration: 0.00000000001,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "-5% bottom",
          },
        });
        gsap.to(sectionRef.current, {
          translateX: "-50%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "35% 50%",
            end: "36% 55%",
          },
        });
        gsap.fromTo(
          sectionRef.current,
          { translateX: "-50%" },
          {
            translateX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              scrub: 1,
              start: "75% 60%",
              end: "76% 55%",
            },
          }
        );
      }
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div
        ref={scope}
        id="selected"
        className="mt-10 md:mt-32  py-16 flex flex-col items-center relative cont mx-auto"
      >
        <SectionHeading className={`mb-20`} text={`Selected Work`} />
        <motion.div
          ref={sectionRef}
          className="min-h-[673px] md:min-h-[1670px] lg:min-h-[2180px] w-max mb-32 max-w-full flex items-center flex-col gap-20 md:gap-40 lg:gap-60"
        >
          {elements.length ? (
            elements?.map((element, i) => {
              return (
                <Link
                  to={`/work/${element._id}`}
                  key={element._id}
                  className={` hover:after:opacity-100 hover:before:opacity-100 max-w-[70rem] w-[100%] md:w-[80%] lg:w-[90%] translate-x-0 selectedEl group aspect-video relative link shadow-sm`}
                >
                  <div
                    className={`text-[var(--main-color)] md:text-[var(--main-color-dimmed)] md:hover:text-[var(--main-color)] text-sm md:text-xl lg:text-2xl uppercase transition-colors duration-500 absolute tracking-widest link z-50 max-md:-top-7  left-2 md:-bottom-4 font-extralight md:-left-8 md:-rotate-90 md:origin-left `}
                  >
                    {element.title}
                  </div>
                  <div
                    className={`w-max text-[var(--main-color)] md:text-[var(--main-color-dimmed)] md:hover:text-[var(--main-color)] text-sm md:text-xl lg:text-2xl uppercase transition-colors duration-500 absolute tracking-widest link z-50 max-md:-top-7  right-2 md:top-4 font-light md:-left-8 md:-rotate-90 md:origin-left `}
                  >
                    {i + 1}
                  </div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    draggable={false}
                    width={1200}
                    height={560}
                    className="w-full h-full max-w-full object-contain transition-transform saturate-[1.2] duration-500"
                    src={element.img}
                    alt={element.title}
                  />
                </Link>
              );
            })
          ) : (
            <div className="w-screen flex items-center flex-col gap-20 md:gap-40 lg:gap-60">
              <div className="selectedEl max-w-[70rem] w-[100%] md:w-[80%] lg:w-[90%]  aspect-video">
                <Skeleton className="w-full h-full" />
              </div>
              <div className="selectedEl max-w-[70rem] w-[100%] md:w-[80%] lg:w-[90%] aspect-video">
                <Skeleton className="w-full h-full" />
              </div>
              <div className="selectedEl max-w-[70rem] w-[100%] md:w-[80%] lg:w-[90%] aspect-video">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
          )}
        </motion.div>
        <Link to={`/work`} draggable={false}>
          <PrimaryButton text={`More Work`} />
        </Link>
      </div>
    </>
  );
};

export default SelectedWork;
