import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import { changeScreenWidth } from "../../redux/slices/screenSlice";
import { SectionHeading } from "../";

gsap.registerPlugin(ScrollTrigger);
const SelectedWork = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const bigScreen = useSelector((state) => state.screen.width);
  const elements = useSelector((state) => state.websiteData.data.selected_work);
  const sectionRef = useRef(null);
  const dispatch = useDispatch();

  window.onresize = () => {
    dispatch(changeScreenWidth(window.innerWidth));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, { x: "0", duration: 0.0000000000001 });
      const tl = gsap.timeline();
      tl.fromTo(
        sectionRef.current,
        { x: "0" },
        {
          x: bigScreen > 767 ? "-50%" : "0",
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
        { x: bigScreen > 767 ? "-50%" : "0" },
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
  }, [bigScreen]);
  return (
    <>
      <div
        id="selected"
        className="mt-20 lg:mt-96 py-16 flex flex-col items-center relative cont mx-auto"
      >
        <SectionHeading text={"Selected work"} />
        <motion.div
          ref={sectionRef}
          className="w-max max-w-full flex items-center flex-col gap-20 md:gap-40 lg:gap-60"
        >
          {elements
            ? elements?.map((element) => {
                return (
                  <div
                    key={element.id}
                    className={`w-[100%] md:w-[80%] lg:w-[90%] hover:after:opacity-100 hover:before:opacity-100 max-w-[70rem] translate-x-0 selectedEl group aspect-video relative link shadow-sm`}
                  >
                    <div
                      className={`${
                        darkTheme
                          ? "text-light md:text-dimmed group-hover:text-light"
                          : "text-dark md:text-darkDimmed group-hover:text-dark"
                      } text-sm md:text-xl lg:text-2xl uppercase transition-colors duration-500 absolute tracking-widest link z-50 max-md:-top-7  left-2 md:-bottom-4 font-light md:-left-8 md:-rotate-90 md:origin-left `}
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
                  </div>
                );
              })
            : Array(3)
                .fill(0)
                .map((_, i) => {
                  return (
                    <div
                      key={i}
                      className={`w-[60rem] aspect-video selectedEl`}
                    >
                      <Skeleton width={"100%"} height={"100%"} />
                    </div>
                  );
                })}
        </motion.div>
      </div>
    </>
  );
};

export default SelectedWork;
