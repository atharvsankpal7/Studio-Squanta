import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CollaborationSection1 = () => {
  return (
    <div className="bg-black overflow-hidden">
      {/* Desktop Container */}
      <div
        className="hidden lg:flex h-[43.875rem]  mx-auto items-center justify-evenly flex-col text-white "
        style={{ marginTop: "5.63rem" }}
      >
        <h1
          className="text-[11.59506rem] font-alan-sans"
          style={{
            fontWeight: "600", letterSpacing: '1.1595rem'
          }}
        >
          SERVICES
        </h1>
        <p className="mx-auto text-center w-5xl text-[4rem] font-alan-sans leading-tight">Collaborating with you to ignite progress, drive engagement, and build what’s next.</p>
        {/* Let's Collaborate Button - positioned to the bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/collaboration"
            className="group inline-flex items-center justify-center gap-1 w-[12.3125rem] bg-black border border-white rounded-[57px] text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            style={{

              height: '40px',
            }}
          >
            <span className="font-montserrat text-[16px] ">
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

      {/* Mobile Container */}
      <div className="lg:hidden px-[1rem] py-[3rem] mt-[3.5rem] sm:mt-[3rem] md:mt-[4rem] text-white">
        <h1
          className="text-[4rem]  md:text-[5.5rem] font-alan-sans font-semibold leading-tight text-center mb-6"
          style={{
            fontWeight: "600",
            letterSpacing: '0.2rem'
          }}
        >
          SERVICES
        </h1>
        <p className="text-center text-[2rem]  md:text-[3rem] font-alan-sans leading-tight mb-8 px-2">
          Collaborating with you to ignite progress, drive engagement, and build what's next.
        </p>

        {/* Get in touch Button for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <Link
            to="/collaboration"
            className="group inline-flex items-center justify-center gap-1 w-[8.3125rem] md:w-[12.3125rem] bg-black border border-white rounded-[57px] text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            style={{
              height: '40px',
            }}
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
