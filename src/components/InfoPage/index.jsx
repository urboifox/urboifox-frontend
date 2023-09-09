import { motion } from "framer-motion";
import { PrimaryButton } from "../";

export default function InfoPage() {
  return (
    <motion.div className="aboutContainer cont">
      <div className="relative aboutHeading">
        <div
          className={`sectionHeading fadeIn text-[var(--main-color-dimmed)] block md:self-start max-w-[80rem] tracking-wide w-full font-main font-thin  px-5 text-2xl md:text-5xl lg:text-5xl capitalize`}
        >
          <h2 className="w-max">Info</h2>
        </div>
      </div>
      <div className=" mb-32 mt-10 md:mt-20 md:px-5">
        <h1 className="transition-colors duration-300 text-[var(--main-color)] text-xl md:text-3xl xl:text-5xl font-light mb-5 ">
          Mohamed Ashraf
        </h1>
        <p className="transition-colors duration-300 font-light md:max-w-4xl text-sm md:text-base text-[var(--main-color-dimmed)]">
          I&apos;m a web developer based in Egypt with a relentless drive for
          excellence, skilled in creating and maintaining functional and
          responsive web applications and websites. Proficient in the latest web
          technologies and frameworks, continuously expanding my skill set to
          stay at the forefront of the industry.
          <br /> With previous designing background, I also worked on graphic
          designing and UI/UX.
        </p>
        <p className="transition-colors duration-300 font-light md:max-w-4xl mb-12 text-sm md:text-base text-[var(--main-color-dimmed)] mt-5">
          You can reach me on:{" "}
          <a
            href="mailto:mohamed.dev.egy@gmail.com"
            className="text-[var(--main-color)] transition-colors duration-300"
          >
            mohamed.dev.egy@gmail.com
          </a>
        </p>
        <a href="/Mohamed Ashraf - Frontend Developer.pdf" download={true}>
          <PrimaryButton text={"Download CV"} />
        </a>
      </div>
    </motion.div>
  );
}
