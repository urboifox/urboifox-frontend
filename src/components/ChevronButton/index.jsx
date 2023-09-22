import { useState } from "react";
import { ChevronBottom } from "../../assets/icons/";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

const ScrollBottom = () => {
  const [isHovered, setIsHovered] = useState(false);
  const lenis = useLenis();
  const handleClick = () => {
    lenis.scrollTo("#selected");
  };
  return (
    <div
      onClick={() => handleClick()}
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
        whileTap={{ scale: window.innerWidth > 767 ? 0.4 : 0.9 }}
        className={`md:group-hover:bg-light border-light transition-all ease-out duration-700 border-2  rounded-full aspect-square w-full flex items-center justify-center`}
      >
        <ChevronBottom
          className={`stroke-light md:group-hover:stroke-dark scale-75 md:scale-50 aspect-square  transition-all duration-300`}
        />
      </motion.div>
    </div>
  );
};

export default ScrollBottom;
