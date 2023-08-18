import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { toggleNavMenu } from "../../redux/slices/navMenuSlice";
import { lenis } from "../../lenis";
import { useEffect, useRef } from "react";
import { animateText } from "../../functions";

const NavMenu = () => {
  const list = useRef(null);
  const menuVisible = useSelector((state) => state.navMenu.visible);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleNavMenu());
  };

  useEffect(() => {
    menuVisible ? (lenis.isStopped = true) : (lenis.isStopped = false);
  }, [menuVisible]);

  useEffect(() => {
    const menuLinks = list.current
      ? [...list.current.querySelectorAll("li")]
      : [];
    if (menuLinks && menuVisible) {
      menuLinks.forEach((link) => {
        animateText(link, 30);
      });
    }
  }, [menuVisible]);

  return (
    <AnimatePresence initial={false} mode="wait">
      {menuVisible && (
        <>
          <motion.div
            onClick={() => handleToggleMenu()}
            key={"blur"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 100,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{ opacity: 0 }}
            className="fixed w-full h-full backdrop-blur-md z-30"
          ></motion.div>
          <motion.div
            key={"menu"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 100,
              transition: {
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0 }}
            className={`${
              darkTheme ? "text-light bg-[#131313]" : "bg-light text-dark"
            } left-0 h-full fixed flex items-center transition-colors duration-300 top-0 shadow-xl font-extralight w-[70%] md:w-1/2 lg:w-1/3 tracking-[.15em] z-50`}
          >
            <ul
              ref={list}
              className="flex flex-col item-center  w-full navMenuUl text-xl md:text-2xl xl:text-5xl"
            >
              <li
                className={`${
                  darkTheme ? "border-dimmed" : "border-darkDimmed"
                } link`}
              >
                Home
              </li>
              <li
                className={`${
                  darkTheme ? "border-dimmed" : "border-darkDimmed"
                } link`}
              >
                About
              </li>
              <li
                className={`${
                  darkTheme ? "border-dimmed" : "border-darkDimmed"
                } link`}
              >
                Work
              </li>
              <li
                className={`${
                  darkTheme ? "border-dimmed" : "border-darkDimmed"
                } link`}
              >
                Contact
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
