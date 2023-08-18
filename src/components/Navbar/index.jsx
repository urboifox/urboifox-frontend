import { useDispatch, useSelector } from "react-redux";
import { Sun } from "../../assets/icons/";
import { motion } from "framer-motion";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { toggleNavMenu } from "../../redux/slices/navMenuSlice";
const Navbar = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const navVisible = useSelector((state) => state.navMenu.visible);
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleNavToggle = () => {
    dispatch(toggleNavMenu());
  };
  return (
    <div className="z-[70] px-5 md:px-10 flex items-center justify-between text-light absolute top-0 left-0 w-full h-20">
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="link w-8 aspect-square group relative"
        onClick={() => handleNavToggle()}
      >
        <span
          className={`${
            darkTheme
              ? `${navVisible ? "bg-light" : "bg-dimmed group-hover:bg-light"}`
              : `${
                  navVisible ? "bg-dark" : "bg-darkDimmed group-hover:bg-dark"
                } `
          } ${
            navVisible
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
              : "top-[35%]"
          } w-full h-[.1em] absolute left-0 rounded-md transition-all duration-200`}
        ></span>
        <span
          className={`${
            darkTheme
              ? `${navVisible ? "bg-light" : "bg-dimmed group-hover:bg-light"}`
              : `${
                  navVisible ? "bg-dark" : "bg-darkDimmed group-hover:bg-dark"
                } `
          } ${
            navVisible
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
              : "bottom-[35%]"
          } w-full h-[.1em] absolute left-0 rounded-md transition-all duration-200`}
        ></span>
      </motion.div>
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
