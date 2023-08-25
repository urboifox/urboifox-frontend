/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./style.scss";

const PrimaryButton = ({ text }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <motion.div
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <button
        className={`${
          darkTheme
            ? "text-white border-white before:bg-light hover:text-dark hover:border-light"
            : "text-dark border-dark before:bg-dark hover:text-light hover:border-dark"
        } cursor-none py-4 px-12 uppercase border-[1px] font-extralight transition-all text-xl duration-300 relative hover:before:origin-left hover:before:scale-x-100 primary-btn`}
      >
        {text}
      </button>
    </motion.div>
  );
};

export default PrimaryButton;
