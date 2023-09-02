import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { setNavMenu, toggleNavMenu } from "../../redux/slices/navMenuSlice";
import { lenis } from "../../lenis";
import { useEffect, useRef } from "react";
import { animateText } from "../../functions";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const list = useRef(null);
  const menuVisible = useSelector((state) => state.navMenu.visible);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();
  const listItems = ["Home", "About", "Work", "Contact"];
  const handleToggleMenu = () => {
    dispatch(toggleNavMenu());
  };
  const handleSetMenu = (val) => {
    dispatch(setNavMenu(val));
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        handleToggleMenu();
      } else if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        handleSetMenu(false);
      }
    };
    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    menuVisible ? (lenis.isStopped = true) : (lenis.isStopped = false);
  }, [menuVisible]);

  useEffect(() => {
    const menuLinks = list.current
      ? [...list.current.querySelectorAll("li")]
      : [];
    menuLinks?.forEach((link) => {
      animateText(link, 40);
    });
  }, [menuVisible]);

  return (
    <>
      <AnimatePresence initial={false}>
        {menuVisible && (
          <>
            <motion.div
              key={"blur"}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
              exit={{ opacity: 0 }}
              className="fixed w-full h-full backdrop-blur-md min-w-[100vw] min-h-[100vh] z-30 top-0 left-0"
            ></motion.div>
            <div
              onClick={() => handleSetMenu(false)}
              className="cont w-full fixed h-screen left-1/2 -translate-x-1/2 top-0 z-50"
            >
              <motion.div
                key={"menu"}
                className={`${
                  darkTheme ? "text-light " : " text-dark"
                } left-0 h-full absolute flex items-center transition-colors duration-300 top-0 w-[70%] md:w-1/2 lg:w-1/3 tracking-widest font-extralight`}
              >
                <ul
                  ref={list}
                  className="flex flex-col item-center  w-full navMenuUl text-xl md:text-2xl xl:text-5xl"
                >
                  {listItems.map((itemText, i) => {
                    return (
                      <Link
                        key={i}
                        to={
                          itemText.toLowerCase() === "home"
                            ? "/"
                            : itemText.toLowerCase()
                        }
                        onClick={() => handleSetMenu(false)}
                      >
                        <motion.li
                          initial={{ x: -200, opacity: 0 }}
                          animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                              // duration: 0.1,
                              delay: i * 0.1,
                              type: "spring",
                              stiffness: 80,
                              damping: 15,
                            },
                          }}
                          exit={{
                            x: -200,
                            opacity: 0,
                            transition: {
                              duration: 0.1,
                            },
                          }}
                          className={`${
                            darkTheme ? "before:bg-light" : "before:bg-dark"
                          } link`}
                        >
                          {itemText}
                        </motion.li>
                      </Link>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMenu;
