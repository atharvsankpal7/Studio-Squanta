import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MotionButton from "./ui/MotionButton";
import Container from "./ui/Container";

const CollaborationSection = () => {
  const navigate = useNavigate();

  return (
    <Container className="bg-black text-white">
      <div
        className="
        w-full   mx-auto 
        flex flex-col items-center  justify-center
        py-[2rem] sm:py-[3rem] md:py-[4rem] lg:py-[5rem] xl:py-0
      "
      >
        {/* Heading */}
        <h2
          className="
            text-center font-montserrat font-medium
            lg:text-[48px] leading-tight h-auto w-full max-w-[18rem] mx-auto
           sm:max-w-[24rem] 
             md:max-w-[32rem] 
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
          Built with intent, delivered with impact.
        </h2>

        {/* Motion Button */}
        <MotionButton  />
      </div>
    </Container>
  );
};
export default CollaborationSection;
