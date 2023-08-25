import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import { changeScreenWidth } from "../../redux/slices/screenSlice";
import { PrimaryButton, SectionHeading } from "../";
import { gsapSelected } from "../../functions";
import { Link } from "react-router-dom";

const SelectedWork = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const bigScreen = useSelector((state) => state.screen.width);
  const elements = useSelector((state) => state.websiteData.data.selected_work);
  const sectionRef = useRef(null);
  const dispatch = useDispatch();
  const scope = useRef(null);
  window.onresize = () => {
    dispatch(changeScreenWidth(window.innerWidth));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsapSelected(sectionRef, bigScreen);
    }, scope);

    return () => {
      ctx.revert();
    };
  }, [bigScreen]);
  return (
    <>
      <div
        ref={scope}
        id="selected"
        className="mt-20 lg:mt-96 py-16 flex flex-col items-center relative cont mx-auto"
      >
        <SectionHeading text={"Selected work"} />
        <motion.div
          ref={sectionRef}
          className="min-h-[2180px] w-max mb-32 max-w-full flex items-center flex-col gap-20 md:gap-40 lg:gap-60"
        >
          {elements
            ? elements?.map((element, i) => {
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
                      } text-sm md:text-xl lg:text-2xl uppercase transition-colors duration-500 absolute tracking-widest link z-50 max-md:-top-7  left-2 md:-bottom-4 font-extralight md:-left-8 md:-rotate-90 md:origin-left `}
                    >
                      {element.title}
                    </div>
                    <div
                      className={`${
                        darkTheme
                          ? "text-light md:text-dimmed group-hover:text-light"
                          : "text-dark md:text-darkDimmed group-hover:text-dark"
                      } text-sm md:text-xl lg:text-2xl uppercase transition-colors duration-500 absolute tracking-widest link z-50 max-md:-top-7  right-2 md:top-4 font-light md:-left-8 md:-rotate-90 md:origin-left `}
                    >
                      {i + 1}
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
            : (
                <div className="min-h-[2180px]">
                  {Array(3)
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
                </div>
              ) || (
                <div className="min-h-[2180px]">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => {
                      return (
                        <div
                          key={i}
                          className={` w-[60rem] aspect-video selectedEl`}
                        >
                          <div className="w-full h-full bg-darkDimmed" />
                        </div>
                      );
                    })}
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
