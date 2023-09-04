import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import { setSelectedItem } from "../../redux/slices/aboutSlice";
import { SkillsPage, ExperiencePage, EducationPage, ConnectPage } from "../";
const items = ["Skills", "Education", "Experience", "Connect"];
const position = [
  "top-0 left-0",
  "top-0 right-0",
  "bottom-0 left-0",
  "bottom-0 right-0",
];

const About = () => {
  const selected = useSelector((state) => state.about.selected);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();
  const handleClick = (val) => {
    dispatch(setSelectedItem(val));
  };

  return (
    <div
      className={`${
        darkTheme ? "text-white" : "text-dark"
      } flex items-center justify-center w-full h-screen`}
    >
      <div className="aboutGrid relative">
        {items.map((item, i) => {
          return (
            <Fragment key={i}>
              <motion.div onClick={() => handleClick(i)} className="link">
                {item}
              </motion.div>
              <AnimatePresence>
                {selected === i && (
                  <motion.span
                    onClick={() => handleClick(null)}
                    initial={{ scale: "105%" }}
                    animate={{
                      scale: "1000%",
                    }}
                    exit={{ scale: "105%" }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`${
                      darkTheme
                        ? "bg-dark border-light"
                        : "bg-[var(--bg-color)] border-dark"
                    } ${
                      position[i]
                    } border bg-dark z-20 absolute aspect-square w-[47%] scale-105`}
                  ></motion.span>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {selected === i && (
                  <motion.article
                    onClick={() => handleClick(null)}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                        duration: 0.3,
                      },
                    }}
                    exit={{ opacity: 0 }}
                    className="z-20 fixed max-w-full w-screen h-screen top-0 left-0"
                  >
                    {selected === 0 ? (
                      <SkillsPage />
                    ) : selected === 1 ? (
                      <EducationPage />
                    ) : selected === 2 ? (
                      <ExperiencePage />
                    ) : selected === 3 ? (
                      <ConnectPage />
                    ) : null}
                  </motion.article>
                )}
              </AnimatePresence>
            </Fragment>
          );
        })}
      </div>
      <h2
        className={`${
          darkTheme ? "text-dimmed" : "text-darkDimmed"
        } absolute -z-10 bottom-10 transition-colors duration-300 uppercase text-xl lg:text-2xl w-max font-light left-1/2 -translate-x-1/2`}
      >
        Get To Know Me
      </h2>
    </div>
  );
};

export default About;
