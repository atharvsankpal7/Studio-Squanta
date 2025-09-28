import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "./ui/Container";

function Welcome() {
  const barsRef = useRef(null);
  const isInView = useInView(barsRef, { once: false, amount: 0.5 });

  return (
    <Container className="bg-black ">

      <div
        ref={barsRef}
        className="min-h-[33rem] md:min-h-[29rem] lg:min-h-[52.56rem] bg-black text-white relative overflow-hidden"
      >
        {/* Decorative bars - Left side */}
        <div className="absolute left-0 bottom-0 flex items-end gap-2 sm:gap-3 lg:gap-4 z-10 ">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="origin-bottom w-4 sm:w-5 lg:w-8 h-34 sm:h-48 md:h-42 lg:h-74 bg-[#00FF26] rounded-t-2xl"
          ></motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="origin-bottom w-4 sm:w-5 lg:w-8 h-28 sm:h-40 md:h-36 lg:h-64 bg-white rounded-t-2xl"
          ></motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="origin-bottom w-4 sm:w-5 lg:w-8 h-20 sm:h-28 md:h-22 lg:h-34 bg-[#00FF26] rounded-t-2xl"
          ></motion.div>
        </div>

        {/* Decorative bars - Right side */}
        <div className="absolute right-0 flex items-start gap-2 sm:gap-3 lg:gap-4 z-10">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="origin-top w-4 sm:w-5 lg:w-8 h-20 sm:h-28 md:h-22 lg:h-34 bg-[#00FF26] rounded-b-2xl"
          ></motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="origin-top w-4 sm:w-5 lg:w-8 h-28 sm:h-40 md:h-36 lg:h-64 bg-white rounded-b-2xl"
          ></motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="origin-top w-4 sm:w-5 lg:w-8 h-34 sm:h-48 md:h-42 lg:h-74 bg-[#00FF26] rounded-b-2xl"
          ></motion.div>
        </div>
        <div className="flex items-center md:block min-h-[30rem] md:min-h-[25rem]">
          <div className="relative z-20  px-6 md:px-12 lg:px-24  ">
            <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12 xl:flex xl:flex-col">
              {/* Main heading - 6.56rem from top on desktop, responsive elsewhere */}
              <h1
                className="font-alan-sans text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-[48px] text-start font-bold uppercase tracking-wide leading-normal"
                style={{ marginTop: "clamp(3rem, 9vw, 6.56rem)" }}
              >
                Welcome to Studio Squanta
              </h1>

              {/* Description - 12.62rem below heading on desktop, responsive elsewhere */}
              <div className="max-w-[70.75rem] mx-auto">
                <p
                  className="font-alan-sans text-lg sm:text-6xl md:text-xl lg:text-[2rem] font-normal  text-white/90"
                  style={{ marginTop: "clamp(2rem, 10vw, 12.62rem)" }}
                >
                  We are a strategic brand and design partner that helps thoughtful
                  consumers evolve into market-leading brands through intelligent
                  branding, performance-driven marketing, and user-centered digital
                  design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black pointer-events-none"></div>
      </div>
    </Container>
  );
}

export default Welcome;
