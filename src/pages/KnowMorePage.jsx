import CollaborationSection from "../components/CollaborationSection";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

const KnowMorePage = () => {
  return (
    <>
      <Container className="pt-25 md:pt-36">
        <FirstSectionWrapper></FirstSectionWrapper>
      </Container>
      <div className="bg-black">
        <Container></Container>
      </div>
      <CollaborationSection />
    </>
  );
};

export default KnowMorePage;
