import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MotionButton from "./ui/MotionButton";
import Container from "./ui/Container";

const CollaborationSection = () => {
  const navigate = useNavigate();

  return (
    <Container className="bg-black text-white">
      <div className="
        w-full  h-auto  mx-auto 
        flex flex-col items-center 
        pt-[2rem] sm:pt-[3rem] md:pt-[4rem] lg:pt-[4.7rem]
        pb-[2rem] sm:pb-[3rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-0
      ">
        {/* Heading */}
        <h2
          className="
            text-center font-montserrat font-medium
            lg:text-[48px] leading-tight h-auto w-full max-w-[18rem] mx-auto mb-4
           sm:max-w-[24rem] sm:mb-6
             md:max-w-[32rem] md:mb-8
            md:text-[32px]
            text-[32px]
            lg:max-w-[50rem] lg:mb-12
             xl:max-w-[82.375rem] xl:mb-0
            flex items-center justify-center font-alan-sans 
          "
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          A partnership. <br /> Built with intent, delivered with impact.
        </h2>

        {/* Motion Button */}
        <MotionButton className="pt-[4.6rem]!"/>
      </div>
    </Container>
  );
};
export default CollaborationSection;
