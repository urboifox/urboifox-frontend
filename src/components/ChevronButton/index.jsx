import { useState } from "react";
import { ChevronBottom } from "../../assets/icons/";
import { motion } from "framer-motion";

const ScrollBottom = () => {
  const [isHovered, setIsHovered] = useState(false);

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
        whileTap={{ scale: 0.9 }}
        className="md:group-hover:bg-light transition-all ease-out duration-700 border-2 border-light rounded-full aspect-square w-full flex items-center justify-center"
      >
        <ChevronBottom
          className={`stroke-light scale-75 md:scale-50 aspect-square md:group-hover:stroke-dark transition-all duration-300`}
        />
      </motion.div>
    </div>
  );
};

export default ScrollBottom;
