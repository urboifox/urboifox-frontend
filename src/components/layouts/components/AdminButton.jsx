/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const AdminButton = ({ children, active = false, basic = false, ...props }) => {
  return (
    <motion.button
      {...props}
      whileTap={{
        scale: !basic ? 1 : 0.95,
        transition: { duration: 0.1 },
      }}
      className={`w-full flex items-center justify-center border-light cursor-none text-xs py-4 px-8 uppercase border-[1px] transition-all md:text-sm duration-300 relative hover:before:origin-left hover:before:scale-x-100 primary-btn ${
        basic
          ? "font-normal text-dark bg-light"
          : active
          ? "bg-light font-normal text-dark before:bg-dark"
          : "font-light text-light before:bg-light md:hover:text-dark"
      }`}
    >
      <div>{children}</div>
    </motion.button>
  );
};

export default AdminButton;
