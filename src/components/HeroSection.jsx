import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import FirstSectionWrapper from './FirstSectionWrapper';

const HeroSection = () => {
  return (
    <FirstSectionWrapper>
      <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Background pattern or gradients can be added here if needed */}
        
        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            
            {/* Studio Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 md:mb-8"
            >
              <h1 
                className="font-sans text-white/50 uppercase tracking-[0.31em]"
                style={{
                  fontFamily: 'Rogbold, sans-serif',
                  fontSize: 'clamp(3rem, 8vw + 2rem, 15.3125rem)', // Responsive from 48px to 245px
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
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
              <h1 
                className="font-sans text-white/75 uppercase tracking-[0.31em]"
                style={{
                  fontFamily: 'Rogbold, sans-serif',
                  fontSize: 'clamp(3rem, 8vw + 2rem, 15.3125rem)', // Responsive from 48px to 245px
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                SQUANTA
              </h1>
            </motion.div>

            {/* Let's Collaborate Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link 
                to="/collaboration"
                className="group inline-flex items-center justify-center gap-1 px-[10px] py-[10px] bg-black border border-white rounded-[57px] text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                style={{
                  width: '250px',
                  height: '63px',
                }}
              >
                <span 
                  className="font-semibold"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                  }}
                >
                  Let's Collaborate
                </span>
                
                {/* Arrow Icon */}
                <svg 
                  width="24" 
                  height="24" 
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

          </div>
        </Container>
      </div>
    </FirstSectionWrapper>
  );
};

export default HeroSection;
