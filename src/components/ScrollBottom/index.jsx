import { ChevronBottom } from "../../assets/icons/";
import { motion } from "framer-motion";

const ScrollBottom = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0,
        },
      }}
      className="hover:bg-light transition-all duration-300 group link absolute w-1/6 aspect-square border-2 border-light rounded-full left-10 -bottom-40 flex items-center justify-center"
    >
      <ChevronBottom
        className={`stroke-light scale-75 group-hover:stroke-dark transition-all duration-300`}
      />
    </motion.div>
  );
};

export default ScrollBottom;
