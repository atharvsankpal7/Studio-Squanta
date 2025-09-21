import React from "react";
import Navbar from "../components/Navbar";
import TrustedSection from "../components/TrustedSection";
import SmartKisan from "../components/SmartKisan";
import CollaborationSection from "../components/CollaborationSection";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

const WorkPage = () => {
  return (
    <>
      <Container>
        <FirstSectionWrapper>
          <TrustedSection />
        </FirstSectionWrapper>
      </Container>
      <div className="bg-black">
        <Container>
          <SmartKisan />
        </Container>
      </div>
      <Container>
        <CollaborationSection />
      </Container>
    </>
  );
};

export default WorkPage;
