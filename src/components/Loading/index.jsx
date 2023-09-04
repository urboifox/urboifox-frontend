import { motion } from "framer-motion";
import "./style.scss";
import { useSelector } from "react-redux";
export default function Loading() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className=" fixed w-full h-full flex items-center justify-center z-[9999999999] bg-dark text-white"
    >
      <div
        className={`${
          darkTheme
            ? "before:bg-light after:bg-light"
            : "before:bg-dark after:bg-dark"
        } loader`}
      ></div>
    </motion.div>
  );
}
