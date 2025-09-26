import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Welcome() {
  // Use a single observer for both sides so they animate together.
  // Set once: false and amount: 1 so the animation triggers whenever the
  // section becomes fully visible and reverses when it leaves the viewport.
  const barsRef = useRef(null);
  // Trigger when ~50% of the section is visible; allow repeated enter/exit events
  const isInView = useInView(barsRef, { once: false, amount: 0.5 });

  return (
    <div ref={barsRef} className="min-h-screen bg-black text-white relative overflow-hidden ">
      {/* Decorative bars - Left side */}
      <div className=" absolute left-4 md:left-16 bottom-0 hidden lg:flex items-end gap-4 z-10 ">
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "10rem" } : { height: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-8 h-32 md:h-40 bg-[#00FF26] rounded-t-2xl"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "20rem" } : { height: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-8 h-64 md:h-80 bg-white rounded-t-2xl"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "24rem" } : { height: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-8 h-72 md:h-96 bg-[#00FF26] rounded-t-2xl"
        ></motion.div>
      </div>

      {/* Decorative bars - Right side */}
      <div className="absolute right-4 md:right-16  hidden lg:flex items-start gap-4 z-10">
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "10rem" } : { height: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-8 h-32 md:h-40 bg-[#00FF26] rounded-b-2xl"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "20rem" } : { height: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-8 h-64 md:h-80 bg-white rounded-b-2xl"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "24rem" } : { height: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-8 h-72 md:h-96 bg-[#00FF26] rounded-b-2xl"
        ></motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Main heading */}
          <h1 className="font-alan-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-wide leading-tight">
            Welcome to<br />
            <span className="text-[#00FF26]">Studio Squanta</span>
          </h1>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-relaxed text-white/90">
              We are a strategic brand and design partner that helps thoughtful consumers evolve into market-leading brands through intelligent branding, performance-driven marketing, and user-centered digital design.
            </p>
          </div>
        </div>
      </div>

      {/* Background gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black pointer-events-none"></div>
    </div>
  )
}

export default Welcome