import { useDispatch, useSelector } from "react-redux";
import { ChevronBottom, Mail } from "../../assets/icons/";
import { AnimatePresence, motion } from "framer-motion";
import { setNavMenu, toggleNavMenu } from "../../redux/slices/navMenuSlice";
import {
  setNavbarVisible,
  setPrevScrollPos,
} from "../../redux/slices/navbarSlice";
import SocialLinks from "../SocialLinks";
import { useEffect } from "react";
import { lenis } from "../../lenis";
import { Link } from "react-router-dom";
const Navbar = () => {
  const selected = useSelector((state) => state.about.selected);
  const navVisible = useSelector((state) => state.navMenu.visible);
  const visible = useSelector((state) => state.navbar.visible);
  const prevScrollPos = useSelector((state) => state.navbar.prevScrollPos);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleNavMenu());
  };

  const handleSetMenu = (val) => {
    dispatch(setNavMenu(val));
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "m" || e.key === "M") {
        lenis.stop();
        e.preventDefault();
        handleToggleMenu();
        dispatch(setNavbarVisible(true));
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
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      dispatch(setPrevScrollPos(currentScrollPos));
      dispatch(setNavbarVisible(visible));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, dispatch]);

  const handleNavToggle = () => {
    dispatch(toggleNavMenu());
  };

  return (
    <div
      className={` cont transition-all duration-1000 mx-auto z-[70] px-5 md:px-10 flex items-center justify-between text-light fixed  -translate-x-1/2 top-0 left-1/2 w-full h-20
    ${visible ? "" : "-translate-y-[100%]"}
    `}
    >
      <AnimatePresence>
        {typeof selected === "number" && (
          <motion.div
            className="flex items-center z-[100] absolute left-2 md:left-10 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Link to={"/about"}>
              <ChevronBottom
                className={`w-7 md:w-10 stroke-[var(--main-color)] rotate-90 transition-colors duration-300`}
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`${
          typeof selected === "number"
            ? "!translate-x-6 md:!translate-x-14"
            : ""
        } link w-6 md:w-8 aspect-square group relative transition-all duration-1000`}
        onClick={() => handleNavToggle()}
      >
        <span
          className={`${
            navVisible ? "bg-primary-100" : "bg-[var(--main-color-dimmed)]"
          }
             ${
               navVisible
                 ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                 : "top-[35%]"
             } w-full h-[.1em] absolute link md:group-hover:bg-[var(--main-color)] left-0 rounded-md transition-all duration-200`}
        ></span>
        <span
          className={`${
            navVisible ? "bg-primary-100" : "bg-[var(--main-color-dimmed)]"
          }
                 ${
                   navVisible
                     ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
                     : "bottom-[35%]"
                 } w-full h-[.1em] absolute link md:group-hover:bg-[var(--main-color)] left-0 rounded-md transition-all duration-200`}
        ></span>
      </motion.div>
      <SocialLinks />
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="link w-5 md:w-8 aspect-square"
      >
        <Link to={"mailto:mohamed.dev.egy@gmail.com"}>
          <Mail
            className={`transition-all duration-300 stroke-[var(--main-color-dimmed)] md:hover:stroke-[var(--main-color)]`}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
