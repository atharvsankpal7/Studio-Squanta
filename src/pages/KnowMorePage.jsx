import CollaborationSection from "../components/CollaborationSection";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

const KnowMorePage = () => {
  return (
    <>
      <Container className="pt-25 md:pt-36">
        <FirstSectionWrapper>
          <h1
            className="text-6xl md:text-7xl font-bold tracking-wide font-alan-sans"
            style={{ marginBottom: "4.44rem" }}
          >
            BE A PART OF STUDIO SQUANTA
          </h1>
        </FirstSectionWrapper>
      </Container>
      <div className="bg-black">
        <Container></Container>
      </div>
      <CollaborationSection />
    </>
  );
};

export default KnowMorePage;
