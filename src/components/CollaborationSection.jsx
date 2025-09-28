import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MotionButton from "./ui/MotionButton";

const CollaborationSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      <div className="
        w-full max-w-[50rem] h-auto  mx-auto 
        flex flex-col items-center px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[0.25rem]
        pt-[2rem] sm:pt-[3rem] md:pt-[4rem] lg:pt-[6rem] xl:pt-[9rem]
        pb-[2rem] sm:pb-[3rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-0
        gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[3rem] xl:gap-[4.95rem]
      ">
        {/* Heading */}
        <h2
          className="
            text-center font-montserrat font-medium
            lg:text-[64px] leading-tight h-auto w-full max-w-[18rem] mx-auto mb-4
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
            margin: "0 auto 1rem auto",
          }}
        >
         Not just a project - a partnership. Built with intent, delivered with impact.
        </h2>

        {/* Motion Button */}
        <MotionButton />
      </div>
    </div>
  );
};
export default CollaborationSection;
