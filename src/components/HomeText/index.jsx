const HomeText = () => {
  return (
    <div>
      <div className="flex flex-col link absolute top-[20%] left-10 md:left-20 text-dimmed text-xs md:text-base font-extralight opacity-20 transition-all duration-500 md:hover:opacity-100">
        <span className="block">{"<p>"}</span>
        <div className="max-md:w-[80%] max-w-sm inline-block translate-x-5">
          <div className="wrapper">
            <span className="animateUp inline-block">
              Web developer with a relentless drive for excellence
            </span>
          </div>
          <div className="wrapper">
            <span className="inline-block animateUp">
              skilled in creating and maintaining functional
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp inline-block">
              and responsive web applications and websites.
            </span>
          </div>
        </div>
        <span className="block">{"</p>"}</span>
      </div>
      <div className="flex flex-col ml-10 link absolute bottom-[20%] right-20 text-dimmed text-xs md:text-base font-extralight opacity-20 transition-all duration-500 lg:hover:opacity-100">
        <span className="block">{"<p>"}</span>
        <div className="max-w-sm inline-block translate-x-5">
          <div className="wrapper">
            <span className="animateUp inline-block">
              Proficient in the latest web technologies and
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp inline-block">
              frameworks, continuously expanding my skill set to
            </span>
          </div>
          <div className="wrapper">
            <span className="animateUp inline-block">
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
