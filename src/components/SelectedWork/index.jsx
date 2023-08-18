import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const SelectedWork = () => {
  const elements = useSelector((state) => state.websiteData.data.selected_work);
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
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
      );
      gsap.fromTo(
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
    <div className="mt-96 flex justify-center relative  mx-auto">
      <motion.div ref={sectionRef} className="w-max flex flex-col gap-52 ">
        {elements?.map((element, i) => {
          return (
            <motion.div
              initial={{ x: i % 2 !== 0 ? "50%" : "0" }}
              key={element.id}
              className={`max-w-[60rem]`}
            >
              <img
                draggable={false}
                className="w-full object-cover"
                src={element.img}
                alt={element.description}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SelectedWork;
