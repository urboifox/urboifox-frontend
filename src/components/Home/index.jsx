import { useEffect } from "react";
import { ChevronButton, Heading, HomeText, SelectedWork, Skills } from "../";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="cont mx-auto relative home h-screen w-full flex items-center justify-center">
        <Heading />
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
