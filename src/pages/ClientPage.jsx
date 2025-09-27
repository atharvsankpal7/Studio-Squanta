import CollaborationSection from "../components/CollaborationSection";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

const KnowMorePage = () => {
  return (
    <div className="bg-black">
      <Container className="pt-25 md:pt-36 bg-black text-white">
        <FirstSectionWrapper className="w-full bg-black">
          <h1
            className="text-6xl md:text-7xl xl:text-[185.521px] font-bold tracking-[18.552px] font-alan-sans text-center "
            style={{ paddingBottom: "4.44rem" }}
          >
            COLLAB
          </h1>
          <p className="text-[27px] md:text-[38px] font-[500] text-center lg:px-40 ">
            At Studio Squanta, we collaborate with brands to craft impactful
            experiences
          </p>
          <img
            src="/public/Squanta Assets/client1.png"
            alt=""
            className="py-12 lg:px-60"
          />
          <img
            src="/public/Squanta Assets/client2.png"
            alt=""
            className="py-12 lg:px-60"
          />
          <img
            src="/public/Squanta Assets/client3.png"
            alt=""
            className="py-12 lg:px-60"
          />
        </FirstSectionWrapper>
      </Container>
      {/* TODO: add Grid here */}
      <div></div>
      <CollaborationSection />
    </div>
  );
};

export default KnowMorePage;
