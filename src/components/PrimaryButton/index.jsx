/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./style.scss";

const PrimaryButton = ({ text, noScale }) => {
  return (
    <motion.div
      whileTap={{ scale: noScale ? 1 : 0.95, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <button
        className={`text-light border-light before:bg-light md:hover:text-dark hover:border-ligh cursor-none text-lg py-4 px-12 uppercase border-[1px] font-extralight transition-all md:text-xl duration-300 relative hover:before:origin-left hover:before:scale-x-100 primary-btn `}
      >
        {text}
      </button>
    </motion.div>
  );
};

export default PrimaryButton;
