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
import { fadeInUp } from "../components/ui/animations";
import { motion } from "framer-motion";
const WorkPage = () => {
  return (
    <section className="bg-black text-white">
      <Container>
        <FirstSectionWrapper>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <WorkPageFirstSection />
          </motion.div>
        </FirstSectionWrapper>
      <FeaturedWorks disableDescription={true} />
      </Container>

      <Container>
        <div
          className="
        w-full max-w-[90rem] mx-auto 
        flex flex-col items-center px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[0.25rem]
        pb-[2rem] sm:pb-[3rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-0 font-alan-sans
        mt-[2rem] sm:mt-[3rem] md:mt-[4rem] lg:mt-[5rem] xl:mt-[26.05rem]
      "
        >
          <h2
            className="
            text-center font-montserrat font-medium
            text-[40px]
            md:text-[60px]
            lg:text-[97px] ] leading-tight h-auto w-full max-w-[18rem] mx-auto mb-4
            sm:max-w-[24rem] sm:mb-6
            md:max-w-[32rem] md:mb-8
            lg:max-w-[976px] lg:mb-12
            xl:mb-0
            flex items-center justify-center
          "
            style={{
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
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
