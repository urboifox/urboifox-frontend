import { motion } from "framer-motion";
export default function AnimatedWrapper({ children }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
