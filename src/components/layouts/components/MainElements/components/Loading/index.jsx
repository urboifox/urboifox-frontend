import { motion } from "framer-motion";
import "./style.scss";
export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className=" fixed w-full h-full flex items-center justify-center z-[9999999999] bg-bg text-white"
    >
      <div className={`before:bg-light after:bg-light loader`}></div>
    </motion.div>
  );
}
