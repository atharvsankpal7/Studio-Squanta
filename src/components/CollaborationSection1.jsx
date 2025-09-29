import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "./ui/animations";

const CollaborationSection1 = () => {
  return (
    <div className="bg-black overflow-hidden">
      {/* Desktop Container */}
      <div
        className="hidden lg:flex h-[43.875rem] mx-auto items-center justify-evenly flex-col text-white"
        style={{ marginTop: "5.63rem" }}
      >
        <motion.h1
          className="text-[11.59506rem] font-alan-sans"
          style={{ fontWeight: "600", letterSpacing: "1.1595rem" }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          SERVICES
        </motion.h1>

        <motion.p
          className="mx-auto text-center w-5xl text-[4rem] font-alan-sans leading-tight"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Collaborating with you to ignite progress, drive engagement, and build
          what’s next.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/collaboration"
            className="group inline-flex items-center justify-center gap-1 w-[12.3125rem] bg-black border border-white rounded-[57px] text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            style={{ height: "40px" }}
          >
            <span className="font-montserrat text-[16px]">Get in touch</span>
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

      {/* Mobile Container */}
      <div className="lg:hidden px-[1rem] py-[3rem] mt-[3.5rem] sm:mt-[3rem] md:mt-[4rem] text-white">
        <motion.h1
          className="text-[4rem] md:text-[5.5rem] font-alan-sans font-semibold leading-tight text-center mb-6"
          style={{ fontWeight: "600", letterSpacing: "0.2rem" }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          SERVICES
        </motion.h1>

        <motion.p
          className="text-center text-[2rem] md:text-[3rem] font-alan-sans leading-tight mb-8 px-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Collaborating with you to ignite progress, drive engagement, and build
          what's next.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            to="/collaboration"
            className="group inline-flex items-center justify-center gap-1 w-[8.3125rem] md:w-[12.3125rem] bg-black border border-white rounded-[57px] text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            style={{ height: "40px" }}
          >
            <span className="font-montserrat text-[12px] md:text-[16px]">
              Get in touch
            </span>
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
    </div>
  );
};

export default CollaborationSection1;
