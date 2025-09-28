import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import FirstSectionWrapper from './FirstSectionWrapper';

const HeroSection = () => {
  return (
    <FirstSectionWrapper>
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* Background video - A placeholder URL is used here */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="Squanta Assets/14066241_1920_1080_30fps.mp4"
        />

        {/* Main Content Container */}
        <Container className="mt-[4.625rem] lg:mt-0 relative z-10 w-full h-[22rem] md:h-[38rem] lg:h-[59rem] flex flex-col items-center justify-center">

          {/* Studio and SQUANTA Text */}
          <div className="flex flex-col items-center justify-center font-[700] ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 md:mb-8"
            >
              <h1 className="font-alan-sans hero-title text-white/50 uppercase tracking-[0.31em]">
                Studio
              </h1>
            </motion.div>

            {/* SQUANTA Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8 md:mb-12 lg:mb-16"
            >
              <h1 className="font-alan-sans hero-title text-white/75 uppercase tracking-[0.31em]">
                SQUANTA
              </h1>
            </motion.div>
          </div>

          {/* Let's Collaborate Button - positioned to the bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="md:self-start"
          >
            <Link
              to="/collaboration"
              className="group inline-flex items-center justify-center gap-[0.15875rem] bg-black border border-white rounded-[57px] text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              style={{
                width: 'clamp(9.92063rem, 15vw, 250px)', // Responsive width
                height: 'clamp(2.5rem, 10vw, 63px)', // Responsive height
                padding: 'clamp(0.39681rem, 1vw, 10px)', // Responsive padding
              }}
            >
              <span
                className="font-montserrat font-semibold leading-normal"
                style={{
                  width: 'clamp(5.6rem, 10vw, 8.81rem)', // Responsive width
                  fontSize: 'clamp(0.63494rem, 1vw, 16px)', // Responsive font size
                }}
              >
                Let's Collaborate
              </span>
              <svg
                width="clamp(0.95238rem, 2vw, 24px)" // Responsive icon size
                height="clamp(0.95238rem, 2vw, 24px)"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path
                  d="M7.5 17.5L17.5 7.5M17.5 7.5H8.5M17.5 7.5V16.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

        </Container>
      </div>
    </FirstSectionWrapper>
  );
};

export default HeroSection;
