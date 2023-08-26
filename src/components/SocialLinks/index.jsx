import { useSelector } from "react-redux";
import { Facebook, Github, Linkedin } from "../../assets/icons";
import { motion } from "framer-motion";
import "./style.scss";
const SocialLinks = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className="flex items-center gap-5 socialLinks">
      <motion.a
        aria-label="Go to my Github"
        href="https://github.com/urboifox"
        target="_blank"
        whileTap={{ scale: 0.9 }}
        className="group"
      >
        <Github
          className={`${
            darkTheme
              ? "fill-dimmed group-hover:fill-light max-md:group-hover:fill-dimmed"
              : "fill-darkDimmed group-hover:fill-dark max-md:group-hover:fill-darkDimmed"
          } w-full h-full transition-colors delay-0 duration-500`}
        />
      </motion.a>
      <motion.a
        aria-label="Go to my Facebook"
        href="https://www.facebook.com/profile.php?id=100008910966277"
        target="_blank"
        whileTap={{ scale: 0.9 }}
        className={`${
          darkTheme
            ? "fill-dimmed hover:fill-light max-md:hover:fill-dimmed"
            : "fill-darkDimmed hover:fill-dark max-md:hover:fill-darkDimmed"
        }`}
      >
        <Facebook />
      </motion.a>
      <motion.a
        aria-label="Go to my Linkedin"
        href="https://www.linkedin.com/in/urboifox/"
        target="_blank"
        whileTap={{ scale: 0.9 }}
        className="group"
      >
        <Linkedin
          className={`${
            darkTheme
              ? "fill-dimmed group-hover:fill-light max-md:group-hover:fill-dimmed"
              : "fill-darkDimmed group-hover:fill-dark max-md:group-hover:fill-darkDimmed"
          } transition-colors duration-300`}
        />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
