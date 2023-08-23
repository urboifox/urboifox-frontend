import { ChevronButton, Heading, HomeText, SelectedWork, Skills } from "../";

const Home = () => {
  return (
    <>
      <div className="cont mx-auto relative home h-screen w-full flex items-center justify-center">
        <div className="wrapper">
          <div className="animateUp">
            <Heading />
          </div>
        </div>
        <HomeText />
        <div className="left-5 bottom-5 lg:-left-12 lg:-bottom-48 absolute">
          <ChevronButton />
        </div>
      </div>
      <SelectedWork />
      <Skills />
    </>
  );
};

export default Home;
