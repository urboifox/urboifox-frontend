import { useDispatch } from "react-redux";
import "./style.scss";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";
import { Circ, gsap } from "gsap";
import { Link } from "react-router-dom";
import { setSelected } from "../../redux/slices/aboutSlice";
import { aboutPages } from "../../constants";
const About = () => {
  // const selected = useSelector((state) => state.about.selected);
  const dispatch = useDispatch();
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, scope);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    dispatch(setSelected(null));
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-light cont mx-auto relative overflow-x-hidden`}
      ref={scope}
    >
      <div className="aboutGrid fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {aboutPages.map((item, i) => {
          return (
            <Fragment key={i}>
              <motion.div
                className={`aboutBox link text-xs md:text-base aspect-square border border-[var(--main-color-dimmed)] md:hover:border-[var(--main-color)] tracking-wide uppercase text-[var(--main-color-dimmed)] md:hover:text-[var(--main-color)] flex transition-colors duration-500 items-center justify-center`}
              >
                <Link
                  aria-label="About me page link"
                  onClick={() => dispatch(setSelected(i))}
                  className="w-full font-light h-full flex items-center justify-center"
                  to={`/about/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </motion.div>
            </Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};

export default About;
