/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const AdminButton = ({ children, active = false, basic = false }) => {
  return (
    <motion.div
      whileTap={{ scale: !basic ? 1 : 0.95, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <button
        className={`w-full border-light cursor-none text-xs py-4 px-8 uppercase border-[1px] transition-all md:text-sm duration-300 relative hover:before:origin-left hover:before:scale-x-100 primary-btn ${
          basic
            ? "font-normal text-dark bg-light"
            : active
            ? "bg-light font-normal text-dark before:bg-dark"
            : "font-light text-light before:bg-light md:hover:text-dark"
        }`}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default AdminButton;
