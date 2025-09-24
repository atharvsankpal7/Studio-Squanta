import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MotionButton from "./ui/MotionButton";

const CollaborationSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      <div className="
        w-full max-w-[90rem] h-auto xl:h-[32.6875rem] mx-auto 
        flex flex-col items-center px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[0.25rem]
        pt-[2rem] sm:pt-[3rem] md:pt-[4rem] lg:pt-[6rem] xl:pt-[9rem]
        pb-[2rem] sm:pb-[3rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-0
      ">
        {/* Heading */}
        <h2
          className="
            text-center font-montserrat font-medium
            text-[2rem] leading-tight h-auto w-full max-w-[18rem] mx-auto mb-4
           sm:max-w-[24rem] sm:mb-6
             md:max-w-[32rem] md:mb-8
            lg:text-[3rem] lg:max-w-[50rem] lg:mb-12
            xl:text-[3.38169rem] xl:max-w-[82.375rem] xl:mb-0
            flex items-center justify-center
          "
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            margin: "0 auto 1rem auto",
          }}
        >
         We approach every project as a true partnership where our innovation aligns with your vision.
        </h2>

        {/* Motion Button */}
        <MotionButton />
      </div>
    </div>
  );
};
export default CollaborationSection;
