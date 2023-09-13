import {
  ChevronButton,
  Heading,
  HomeText,
  SelectedWork,
  Skills,
  TextSection,
} from "../";

const Home = () => {
  return (
    <>
      <div className="cont mx-auto relative home h-screen w-full flex items-center justify-center">
        <Heading />
        <HomeText />
        <div className="left-5 bottom-5 lg:-left-12 lg:-bottom-48 absolute">
          <ChevronButton />
        </div>
      </div>
      <TextSection first={"I bring people"} second={"Ideas to life"} />
      <SelectedWork />
      <Skills />
      <div className="h-[50vh]"></div>
    </>
  );
};

export default Home;
