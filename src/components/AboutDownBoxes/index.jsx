import { Fragment, useEffect, useRef } from "react";
import { aboutPages } from "../../constants";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { setSelected } from "../../redux/slices/aboutSlice";
export default function AboutDownBoxes() {
  const selected = useSelector((state) => state.about.selected);

  const dispatch = useDispatch();
  const scope = useRef(null);

  const wasNull = typeof selected;

  useEffect(() => {
    const box = document.querySelector(".aboutBoxB");
    const ctx = gsap.context(() => {
      if (box) {
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
    <>
      {typeof selected === "number" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={scope}
          className="fixed w-full flex justify-center md:justify-end cont left-1/2 bottom-10 z-30 md:pr-10 -translate-x-1/2"
        >
          <div className="flex gap-2 md:gap-4 opacity-50 transition-opacity duration-500 md:hover:opacity-100">
            {aboutPages.map((item, i) => {
              return (
                <Fragment key={i}>
                  <motion.div
                    className={`${
                      selected === i
                        ? "bg-[var(--sec-color)] text-[var(--bg-color)]"
                        : "bg-[var(--bg-color)] text-[var(--sec-color)]"
                    } aboutBoxB link text-[7px] sm:text-[10px] aspect-square w-14 sm:w-20 border border-[var(--main-color-dimmed)] tracking-wide uppercase flex transition-colors duration-500 items-center justify-center`}
                  >
                    <Link
                      onClick={() => dispatch(setSelected(i))}
                      className="w-full h-full flex items-center justify-center"
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
      )}
    </>
  );
}
