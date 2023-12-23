import { Facebook, Github, Linkedin } from "../Icons";
import { motion } from "framer-motion";
import "./style.scss";
const SocialLinks = () => {
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
          className={`fill-[var(--main-color-dimmed)] md:group-hover:fill-[var(--main-color)] w-full h-full transition-colors delay-0 duration-300`}
        />
      </motion.a>
      <motion.a
        aria-label="Go to my Facebook"
        href="https://www.facebook.com/profile.php?id=100008910966277"
        target="_blank"
        whileTap={{ scale: 0.9 }}
        className={`fill-[var(--main-color-dimmed)] md:hover:fill-[var(--main-color)]`}
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
          className={`fill-[var(--main-color-dimmed)] md:group-hover:fill-[var(--main-color)] transition-colors duration-300`}
        />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
