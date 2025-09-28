import CollaborationSection from "../components/CollaborationSection";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";
import SoftwareSection2 from "../components/SoftwareSection2";

const KnowMorePage = () => {
  return (
    <div className="bg-black">
      <Container className="pt-[5.43rem] bg-black text-white">
        <FirstSectionWrapper className="w-full bg-black">
          <h1
            className="text-6xl md:text-7xl xl:text-[185.521px] font-bold tracking-[18.552px] font-alan-sans text-center mt-4"
            style={{ paddingBottom: "6.81rem" }}
          >
            COLLAB
          </h1>
          <p className="text-[27px] md:text-[38px] lg:text-[64px] font-[500] text-center font-alan-sans leading-[110%] mb-[10rem]">
            At Studio Squanta, we collaborate with brands to craft impactful
            experiences
          </p>
          <div className="flex flex-col items-center gap-y-6">
            <img
              src="/Squanta Assets/client1.png"
              alt=""
              className="w-full max-w-[40.3125rem] h-auto"
            />
            <img
              src="/Squanta Assets/client2.png"
              alt=""
              className="w-full max-w-[40.3125rem] h-auto"
            />
            <img
              src="/Squanta Assets/client3.png"
              alt=""
              className="w-full max-w-[40.3125rem] h-auto"
            />
          </div>
        </FirstSectionWrapper>
      </Container>
      {/* TODO: add Grid here */}
      <SoftwareSection2 />
      <div></div>
      <CollaborationSection />
    </div>
  );
};

export default KnowMorePage;
