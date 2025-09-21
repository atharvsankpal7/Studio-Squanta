import React from "react";
import ServicesSections from "../components/ServicesSections";
import CollaborationSection from "../components/CollaborationSection";
import Navbar from "../components/Navbar";
import CollaborationSection1 from "../components/CollaborationSection1";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";
import { sections } from "../data/sections";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

export const ServicesPage = () => {
  return (
    <>
      <Container>
        <FirstSectionWrapper>
          <CollaborationSection1 />
        </FirstSectionWrapper>
      </Container>
      <div className="w-full bg-black">
        <Container>
          <ServicesSections sections={sections} />
        </Container>
      </div>
      <Container>
        <CollaborationSection />
      </Container>
    </>
  );
};

export default ServicesPage;
