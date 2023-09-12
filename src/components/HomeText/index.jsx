import { useSelector } from "react-redux";

const HomeText = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div>
      <code
        className={`${
          darkTheme ? "text-white opacity-[45%]" : "text-dark opacity-70"
        } flex flex-col link absolute top-[21%] md:top-[20%] max-sm:-translate-x-16 left-5 md:left-20 text-xs max-sm:scale-[70%] tracking-wide md:text-sm font-thin transition-all duration-500 md:hover:opacity-100`}
      >
        <span className="block text-primary-100">{"<p>"}</span>
        <div className="inline-block translate-x-5">
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              Web developer with a relentless drive for excellence
            </span>
          </div>
          <div className="wrapper">
            <span className="inline-block animateUp w-max">
              skilled in creating and maintaining functional
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              and responsive web applications and websites.
            </span>
          </div>
        </div>
        <span className="block text-primary-100">{"</p>"}</span>
      </code>
      <code
        className={`${
          darkTheme ? "text-white opacity-[45%]" : "text-dark opacity-70"
        } flex flex-col ml-10 link absolute bottom-[22%] md:bottom-[20%] right-10 md:right-20 md:text-sm max-sm:translate-x-14 max-sm:scale-[70%] font-thin transition-all duration-500 lg:hover:opacity-100  text-xs tracking-wide`}
      >
        <span className="block text-primary-100">{"<p>"}</span>
        <div className="inline-block translate-x-5">
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              Proficient in the latest web technologies and
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              frameworks, continuously expanding my skill set
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              to stay at the forefront of the industry.
            </span>
          </div>
        </div>
        <span className="block text-primary-100">{"</p>"}</span>
      </code>
    </div>
  );
};

export default HomeText;
