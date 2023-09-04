import { useSelector } from "react-redux";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import { SkillsPage, ExperiencePage, EducationPage, ConnectPage } from "../";
import { HomeIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
const items = ["Skills", "Education", "Experience", "Connect"];
const position = [
  "top-4 md:top-0 left-4 md:left-0",
  "top-4 md:top-0 right-4 md:right-0",
  "bottom-4 md:bottom-0 left-4 md:left-0",
  "bottom-4 md:bottom-0 right-4 md:right-0",
];

const About = () => {
  const [selected, setSelected] = useState(null);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const handleClick = (val) => {
    setSelected(val);
  };

  return (
    <div
      className={`${
        darkTheme ? "text-white" : "text-dark"
      } flex items-center justify-center w-full h-screen overflow-x-hidden`}
    >
      <div className="aboutGrid relative">
        <Link
          to={"/"}
          className={`link md:hover:scale-105 border-[var(--main-color-dimmed)] md:hover:border-[var(--main-color)] hover:text-[var(--main-color)] transition-all duration-300 text-[var(--main-color-dimmed)] bg-[var(--bg-color)] absolute w-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-20 rounded-full flex items-center justify-center group aspect-square border`}
        >
          <HomeIcon
            className={`stroke-[var(--main-color-dimmed)] md:group-hover:stroke-[var(--main-color)] transition-colors duration-300 w-16`}
          />
        </Link>
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
                    className={`${position[i]} border bg-[var(--bg-color)] border-[var(--main-color)] z-20 absolute aspect-square w-[40%] md:w-[47%] scale-100`}
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
