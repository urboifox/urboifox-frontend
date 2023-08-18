import { useSelector } from "react-redux";

const HomeText = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div>
      <div
        className={`${
          darkTheme ? "text-white opacity-[45%]" : "text-dark opacity-70"
        } flex flex-col link absolute top-[25%] md:top-[20%] left-5 md:left-20 text-xs md:text-base font-extralight  transition-all duration-500 md:hover:opacity-100`}
      >
        <span className="block">{"<p>"}</span>
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
        <span className="block">{"</p>"}</span>
      </div>
      <div
        className={`${
          darkTheme ? "text-white opacity-[45%]" : "text-dark opacity-70"
        } flex flex-col ml-10 link absolute bottom-[25%] md:bottom-[20%] right-10 md:right-20  text-xs md:text-base font-extralight transition-all duration-500 lg:hover:opacity-100`}
      >
        <span className="block">{"<p>"}</span>
        <div className="inline-block translate-x-5">
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              Proficient in the latest web technologies and
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              frameworks, continuously expanding my skill set to
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp w-max inline-block">
              stay at the forefront of the industry.
            </span>
          </div>
        </div>
        <span className="block">{"</p>"}</span>
      </div>
    </div>
  );
};

export default HomeText;
