import {
  ChevronButton,
  Heading,
  HomeText,
  SelectedWork,
  Skills,
  TextSection,
} from "../";
import { Fox } from "../Fox";
import ModelWrapper from "../ModelWrapper/inde";

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

      <ModelWrapper id={"foxContainer3D"}>
        <Fox />
      </ModelWrapper>

      <SelectedWork />

      <div className="mt-20 md:mt-32 mb-32">
        <TextSection>
          <span>
            I&apos;m constantly<span className="inner">I hate</span>
          </span>
          <span>
            Expanding my<span className="inner">Studying for</span>
          </span>
          <span>
            Knowledge<span className="inner">Too long</span>
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
