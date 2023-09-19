import {
  ChevronButton,
  Heading,
  HomeText,
  // HomeText,
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

      <div className="mt-20 md:mt-32 lg:mt-96">
        <TextSection first={"I bring people"} second={"Ideas to life"} />
      </div>
      <SelectedWork />
      <div className="mt-20 md:mt-32 mb-32">
        <TextSection
          first={"I'm constantly"}
          second={"Expanding my"}
          third={"Knowledge"}
        />
      </div>
      <Skills />
      <div className="h-[100vh]"></div>
    </>
  );
};

export default Home;
