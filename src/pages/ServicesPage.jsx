import React from "react";
import ServicesSections from "../components/ServicesSections";
import CollaborationSection from "../components/CollaborationSection";
import Navbar from "../components/Navbar";
import CollaborationSection1 from "../components/CollaborationSection1";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServiceGrid";
import FeaturedWorks from "../components/WorkSection";
import Container from "../components/ui/Container";
import CollaborationForm from "../components/CollaborationForm";
import { sections } from "../data/sections";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

export const ServicesPage = () => {
  return (
    <div className="bg-black">
      <Container >
        <FirstSectionWrapper>
          <CollaborationSection1 />
        </FirstSectionWrapper>
      </Container>
        <ServicesGrid />
        <FeaturedWorks disable={true} />
        <CollaborationSection  />
    </div>
  );
};

export default ServicesPage;
