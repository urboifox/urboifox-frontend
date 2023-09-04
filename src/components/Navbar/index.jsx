import { useDispatch, useSelector } from "react-redux";
import { Sun } from "../../assets/icons/";
import { motion } from "framer-motion";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { setNavMenu, toggleNavMenu } from "../../redux/slices/navMenuSlice";
import {
  setNavbarVisible,
  setPrevScrollPos,
} from "../../redux/slices/navbarSlice";
import SocialLinks from "../SocialLinks";
import { useEffect } from "react";
import { lenis } from "../../lenis";
const Navbar = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
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
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleNavToggle = () => {
    dispatch(toggleNavMenu());
  };
  return (
    <div
      className={`cont transition-all duration-1000 mx-auto z-[70] px-5 md:px-10 flex items-center justify-between text-light fixed  -translate-x-1/2 top-0 left-1/2 w-full h-20
    ${visible ? "" : "-translate-y-[100%]"}
    `}
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="link w-8 aspect-square group relative"
        onClick={() => handleNavToggle()}
      >
        <span
          className={`${
            darkTheme
              ? `${
                  navVisible ? "bg-light" : "bg-dimmed group-hover:bg-light"
                } max-md:bg-light`
              : `${
                  navVisible ? "bg-dark" : "bg-darkDimmed group-hover:bg-dark"
                } max-md:bg-dark`
          } ${
            navVisible
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
              : "top-[35%]"
          } w-full h-[.1em] absolute left-0 rounded-md transition-all duration-200`}
        ></span>
        <span
          className={`${
            darkTheme
              ? `${
                  navVisible ? "bg-light" : "bg-dimmed group-hover:bg-light"
                } max-md:bg-light`
              : `${
                  navVisible ? "bg-dark" : "bg-darkDimmed group-hover:bg-dark"
                } max-md:bg-dark`
          } ${
            navVisible
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
              : "bottom-[35%]"
          } w-full h-[.1em] absolute left-0 rounded-md transition-all duration-200`}
        ></span>
      </motion.div>
      <SocialLinks />
      <motion.div
        onClick={() => handleTheme()}
        whileTap={{ scale: 0.9 }}
        className="link w-7 aspect-square"
      >
        <Sun
          className={`${
            darkTheme
              ? "max-md:stroke-light stroke-dimmed md:hover:stroke-light"
              : "max-md:stroke-dark stroke-darkDimmed md:hover:stroke-dark"
          } transition-all duration-300 `}
        />
      </motion.div>
    </div>
  );
};

export default Navbar;
