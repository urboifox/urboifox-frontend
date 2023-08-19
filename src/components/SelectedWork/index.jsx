import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
gsap.registerPlugin(ScrollTrigger);
const SelectedWork = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const elements = useSelector((state) => state.websiteData.data.selected_work);
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, { x: "0", duration: 0.0000000000001 });
      const tl = gsap.timeline();
      tl.fromTo(
        sectionRef.current,
        { x: "0" },
        {
          x: "-50%",
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "45% 80%",
            end: "45% 60%",
          },
        }
      ).fromTo(
        sectionRef.current,
        { x: "-50%" },
        {
          x: "0",
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "80% 80%",
            end: "80% 60%",
          },
        }
      );
    });

    return () => {
      ctx.kill();
    };
  }, []);
  return (
    <div
      id="selected"
      className="mt-96 pt-24 flex justify-center relative  mx-auto"
    >
      <motion.div ref={sectionRef} className="w-max flex flex-col gap-60 ">
        {elements
          ? elements?.map((element, i) => {
              return (
                <motion.div
                  initial={{ x: i % 2 !== 0 ? "50%" : "0" }}
                  key={element.id}
                  className={`w-[60rem] selectedEl group aspect-video relative link shadow-sm`}
                >
                  <div
                    className={`${
                      darkTheme
                        ? "text-light md:text-dimmed group-hover:text-light"
                        : "text-dark md:text-darkDimmed group-hover:text-dark"
                    } text-2xl uppercase transition-colors duration-500 absolute tracking-widest link z-50 -bottom-4 font-light -left-8 -rotate-90 origin-left `}
                  >
                    {element.title}
                  </div>

                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    draggable={false}
                    className="w-full object-cover h-full transition-transform saturate-[1.2] duration-500"
                    src={element.img}
                    alt={element.description}
                  />
                </motion.div>
              );
            })
          : Array(3)
              .fill(0)
              .map((_, i) => {
                return (
                  <motion.div
                    initial={{ x: i % 2 !== 0 ? "50%" : "0" }}
                    key={i}
                    className={`w-[60rem] aspect-video`}
                  >
                    <Skeleton width={"100%"} height={"100%"} />
                  </motion.div>
                );
              })}
      </motion.div>
    </div>
  );
};

export default SelectedWork;
