import CollaborationSection from "../components/CollaborationSection";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";
import SoftwareSection2 from "../components/SoftwareSection2";
import { motion } from "framer-motion";

import { fadeInUp } from "../components/ui/animations";

const KnowMorePage = () => {
  return (
    <div className="bg-black">
      <Container className="pt-25 md:pt-36 bg-black text-white">
        <FirstSectionWrapper className="w-full bg-black">
          <motion.h1
            className="text-6xl md:text-7xl xl:text-[185.521px] font-bold tracking-[18.552px] font-alan-sans text-center"
            style={{ paddingBottom: "4.44rem" }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            COLLAB
          </motion.h1>
          <p className="text-[27px] md:text-[38px] font-[500] text-center lg:px-40 ">
            At Studio Squanta, we collaborate with brands to craft impactful
            experiences
          </p>
          <img
            src="/Squanta Assets/client1.png"
            alt=""
            className="py-12 lg:px-60"
          />
          <img
            src="/Squanta Assets/client2.png"
            alt=""
            className="py-12 lg:px-60"
          />
          <img
            src="/Squanta Assets/client3.png"
            alt=""
            className="py-12 lg:px-60"
          />
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
