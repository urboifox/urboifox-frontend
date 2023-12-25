import {
  Heading,
  ModelText,
  SelectedWork,
  ScrollBottom,
  HomeText,
  ModelWrapper,
  Skills,
  Fox,
  TextSection,
} from "./components";

const Home = () => {
  return (
    <>
      <div className="mb-10 md:mb-20 lg:mb-96 cont mx-auto relative home h-screen w-full flex items-center justify-center">
        <Heading />
        <HomeText />
        <div className="left-5 bottom-5 lg:-left-12 lg:-bottom-48 absolute">
          <ScrollBottom />
        </div>
      </div>

      <div>
        <TextSection>
          <span>
            I bring people<span className="inner">They rarely</span>
          </span>
          <span>
            Ideas to life<span className="inner">Look good</span>
          </span>
        </TextSection>
      </div>

      <div className="relative">
        <ModelText text={"urboifox"} />

        <ModelWrapper id={"foxContainer3D"}>
          <Fox />
        </ModelWrapper>
      </div>

      <SelectedWork />

      <div className="mt-20 md:mt-32 mb-32">
        <TextSection>
          <span>
            I&apos;m constantly<span className="inner">I don&apos;t study</span>
          </span>
          <span>
            Expanding my<span className="inner">My college</span>
          </span>
          <span>
            Knowledge<span className="inner">Subjects tho</span>
          </span>
        </TextSection>
      </div>
      <Skills />
      {/* making more space for the skills slider horizontal scroll */}
      <div className="h-[50vh]"></div>
    </>
  );
};

export default Home;
