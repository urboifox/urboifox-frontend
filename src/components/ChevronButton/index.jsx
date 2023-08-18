import { useState } from "react";
import { ChevronBottom } from "../../assets/icons/";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ScrollBottom = () => {
  const [isHovered, setIsHovered] = useState(false);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group link w-20 md:w-40 lg:w-72 aspect-square"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: isHovered && window.innerWidth > 767 ? 0.5 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: "circOut",
        }}
        whileTap={{ scale: window.innerWidth > 767 && 0.4 }}
        className={`${
          darkTheme
            ? "md:group-hover:bg-light border-light"
            : "md:group-hover:bg-dark border-dark"
        } transition-all ease-out duration-700 border-2  rounded-full aspect-square w-full flex items-center justify-center`}
      >
        <ChevronBottom
          className={`${
            darkTheme
              ? "stroke-light md:group-hover:stroke-dark"
              : "stroke-dark md:group-hover:stroke-light"
          } scale-75 md:scale-50 aspect-square  transition-all duration-300`}
        />
      </motion.div>
    </div>
  );
};

export default ScrollBottom;
