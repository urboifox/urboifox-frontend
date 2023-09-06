import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";
import { Circ, gsap } from "gsap";
import { SkillsPage, ExperiencePage, EducationPage, ConnectPage } from "../";
import { setSelected, setWasNull } from "../../redux/slices/aboutSlice";
const items = ["Skills", "Education", "Experience", "Connect"];

const About = () => {
  const selected = useSelector((state) => state.about.selected);
  const wasNull = useSelector((state) => state.about.wasNull);
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const h2 = useRef(null);
  const scope = useRef(null);
  const handleClick = (val) => {
    if (selected === null && typeof val === "number") {
      dispatch(setWasNull(true));
      dispatch(setSelected(val));
    } else if (val === null) {
      dispatch(setWasNull(false));
      dispatch(setSelected(val));
    } else {
      dispatch(setSelected(val));
    }
  };

  useEffect(() => {
    const scrollbar = document.getElementById("scrollbar");
    scrollbar.style.height = `0`;
  }, [selected, wasNull]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // when NO box is selected
      if (!wasNull) {
        gsap.from(h2.current, {
          opacity: 0,
          y: 30,
          duration: 1,
        });
        gsap.fromTo(
          ".aboutBox",
          { x: 300, y: 200, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: Circ.easeOut,
            stagger: 0.2,
            delay: 0.5,
          }
        );
        gsap.to(".aboutBoxB", {
          y: 200,
          opacity: 0,
          duration: 0,
        });
      }

      // when a box is selected
      if (wasNull) {
        gsap.to(".aboutBox", {
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(h2.current, {
          opacity: 0,
          y: 30,
          duration: 1,
        });
        gsap.fromTo(
          ".aboutBoxB",
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 0.5,
            stagger: 0.1,
          }
        );
      }
    }, scope);
    return () => ctx.revert();
  }, [wasNull]);

  return (
    <div
      className={`${
        darkTheme ? "text-white" : "text-dark"
      } cont mx-auto relative overflow-x-hidden`}
      ref={scope}
    >
      <div className="aboutGrid fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {items.map((item, i) => {
          return (
            <Fragment key={i}>
              <motion.div
                onClick={() => handleClick(i)}
                className={`aboutBox link text-xs md:text-base aspect-square border border-[var(--main-color-dimmed)] md:hover:border-[var(--main-color)] tracking-wide uppercase text-[var(--main-color-dimmed)] md:hover:text-[var(--main-color)] flex transition-colors duration-500 items-center justify-center`}
              >
                {item}
              </motion.div>
            </Fragment>
          );
        })}
      </div>

      <div className="fixed w-full flex justify-center md:justify-end cont left-1/2 bottom-10 z-30 md:pr-10 -translate-x-1/2">
        <div className="flex gap-2 md:gap-4 opacity-50 transition-opacity duration-500 md:hover:opacity-100">
          {items.map((item, i) => {
            return (
              <Fragment key={i}>
                <motion.div
                  onClick={() => handleClick(i)}
                  className={`${
                    selected === i
                      ? "bg-[var(--sec-color)] text-[var(--bg-color)]"
                      : "bg-[var(--bg-color)] text-[var(--sec-color)]"
                  } aboutBoxB link text-[7px] sm:text-[10px] aspect-square w-14 sm:w-20 border border-[var(--main-color-dimmed)] tracking-wide uppercase flex transition-colors duration-500 items-center justify-center`}
                >
                  {item}
                </motion.div>
              </Fragment>
            );
          })}
        </div>
      </div>
      {items.map((_, i) => {
        return (
          // mode="popLayout"
          <AnimatePresence key={i}>
            {selected === i && (
              <motion.div
                key={`item-${i}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                  },
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=" relative px-5 md:px-10 z-20 cont mx-auto"
              >
                {selected === 0 ? (
                  <SkillsPage />
                ) : selected === 1 ? (
                  <EducationPage />
                ) : selected === 2 ? (
                  <ExperiencePage />
                ) : selected === 3 ? (
                  <ConnectPage />
                ) : (
                  <></>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}
      <h2
        ref={h2}
        className={`${
          darkTheme ? "text-dimmed" : "text-darkDimmed"
        } fixed -z-10 bottom-10 transition-colors duration-300 uppercase text-xl lg:text-2xl w-max font-light left-1/2 -translate-x-1/2`}
      >
        Get To Know Me
      </h2>
    </div>
  );
};

export default About;
