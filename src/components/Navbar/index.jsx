import { useDispatch, useSelector } from "react-redux";
import { Sun, Burger } from "../../assets/icons/";
import { motion } from "framer-motion";
import { toggleTheme } from "../../redux/slices/themeSlice";
const Navbar = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className=" px-5 md:px-10 flex items-center justify-between text-light absolute top-0 left-0 w-full h-20">
      <motion.div whileTap={{ scale: 0.9 }} className="link w-10 aspect-square">
        <Burger
          className={`${
            darkTheme
              ? "max-md:stroke-light stroke-dimmed md:hover:stroke-light"
              : "max-md:stroke-dark stroke-darkDimmed md:hover:stroke-dark"
          } transition-all duration-300`}
        />
      </motion.div>
      <motion.div
        onClick={() => handleTheme()}
        whileTap={{ scale: 0.9 }}
        className="link w-7 aspect-square"
      >
        <Sun
          className={`${
            darkTheme
              ? "max-md:stroke-light stroke-dimmed md:hover:stroke-light"
              : "max-md:stroke-dark stroke-darkDimmed md:hover:stroke-dark"
          } transition-all duration-300 `}
        />
      </motion.div>
    </div>
  );
};

export default Navbar;
