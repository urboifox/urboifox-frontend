import { motion } from "framer-motion";
import "./style.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="NotFoundContainer">
      {Array(80)
        .fill(0)
        .map((_, i) => {
          return (
            <span key={i} className="particle">
              {i <= 30 ? "4" : "0"}
            </span>
          );
        })}
      <article className="content">
        <p>Damnit stranger,</p>
        <p>
          You got lost in the <strong className="text-light">404</strong>{" "}
          galaxy.
        </p>
        <motion.div
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to={"/"}
            className={`inline-block mt-10 text-light border-light before:bg-light md:hover:text-dark hover:border-ligh cursor-none text-md py-4 px-5 md:px-12 uppercase border-[1px] font-extralight transition-all md:text-xl duration-300 relative hover:before:origin-left hover:before:scale-x-100 primary-btn`}
          >
            Go back to earth.
          </Link>
        </motion.div>
      </article>
    </div>
  );
};

export default NotFound;
