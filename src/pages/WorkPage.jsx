import React from "react";
import Navbar from "../components/Navbar";
import TrustedSection from "../components/TrustedSection";
import SmartKisan from "../components/SmartKisan";
import CollaborationSection from "../components/CollaborationSection";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";
import MotionButton from "../components/ui/MotionButton";
import WorkPageFirstSection from "../components/WorkPageFirstSection";
import FeaturedWorks from "../components/WorkSection";

const WorkPage = () => {
  return (
    <section className="bg-black text-white">
      <Container>
        <FirstSectionWrapper>
          <WorkPageFirstSection />
        </FirstSectionWrapper>
      </Container>
      <FeaturedWorks disableDescription={true} />

      <Container>
        <div
          className="
        w-full max-w-[90rem] h-auto xl:h-[32.6875rem] mx-auto 
        flex flex-col items-center px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[0.25rem]
        pt-[2rem] sm:pt-[3rem] md:pt-[4rem] lg:pt-[6rem] xl:pt-[9rem]
        pb-[2rem] sm:pb-[3rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-0
      "
        >
          <h2
            className="
            text-center font-montserrat font-medium
            text-[40px]
            md:text-[60px]
            lg:text-[99px] ] leading-tight h-auto w-full max-w-[18rem] mx-auto mb-4
            sm:max-w-[24rem] sm:mb-6
            md:max-w-[32rem] md:mb-8
            lg:max-w-[976px] lg:mb-12
            xl:mb-0
            flex items-center justify-center
          "
            style={{
              fontFamily: "Rogbold",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0 auto 1rem auto",
            }}
          >
            Up next - your brand, your story, our craft.
          </h2>

          {/* Motion Button */}
          <MotionButton />
        </div>
      </Container>
    </section>
  );
};

export default WorkPage;
