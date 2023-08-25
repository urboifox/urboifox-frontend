import { useDispatch, useSelector } from "react-redux";
import { Facebook, Github, Linkedin, Sun } from "../../assets/icons/";
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
    <div className="cont mx-auto z-[70] px-5 md:px-10 flex items-center justify-between text-light absolute -translate-x-1/2 top-0 left-1/2 w-full h-20">
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
      <div className="flex items-center gap-5">
        <motion.a
          aria-label="Go to my Github"
          href="https://github.com/urboifox"
          target="_blank"
          whileTap={{ scale: 0.9 }}
          className="w-5 aspect-square link group"
        >
          <Github
            className={`${
              darkTheme
                ? "fill-dimmed group-hover:fill-light max-md:group-hover:fill-dimmed"
                : "fill-darkDimmed group-hover:fill-dark max-md:group-hover:fill-darkDimmed"
            } w-full h-full transition-colors delay-0 duration-500`}
          />
        </motion.a>
        <motion.a
          aria-label="Go to my Facebook"
          href="https://www.facebook.com/profile.php?id=100008910966277"
          target="_blank"
          whileTap={{ scale: 0.9 }}
          className={`${
            darkTheme
              ? "fill-dimmed hover:fill-light max-md:hover:fill-dimmed"
              : "fill-darkDimmed hover:fill-dark max-md:hover:fill-darkDimmed"
          } w-5 aspect-square link`}
        >
          <Facebook
            className={`w-full h-full transition-colors duration-500`}
          />
        </motion.a>
        <motion.a
          aria-label="Go to my Linkedin"
          href="https://www.linkedin.com/in/urboifox/"
          target="_blank"
          whileTap={{ scale: 0.9 }}
          className="w-5 aspect-square link group"
        >
          <Linkedin
            className={`${
              darkTheme
                ? "fill-dimmed group-hover:fill-light max-md:group-hover:fill-dimmed"
                : "fill-darkDimmed group-hover:fill-dark max-md:group-hover:fill-darkDimmed"
            } w-full h-full transition-colors delay-0 duration-500`}
          />
        </motion.a>
      </div>
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
