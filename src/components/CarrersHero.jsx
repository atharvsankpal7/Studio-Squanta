import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CarrersHero = () => {
  return (
    <div className="bg-black overflow-hidden">
      {/* Desktop Container */}
      <div
        className="hidden lg:flex mx-auto items-center justify-evenly flex-col text-white "
        style={{ marginTop: "0rem" }}
      >
        <h1
          className="text-[11.59506rem] font-rogbold"
          style={{
            fontWeight: "600", letterSpacing: '1.1595rem', margin: "3rem 0 5rem 0"
          }}
        >
          CAREER
        </h1>
        <p className="mx-auto text-center w-[74.75rem] text-[6.0425rem] font-rogbold leading-tight">We create with passion, purpose, and play — because work should feel like something you love, not just something you do.</p>

      </div>

      {/* Mobile Container */}
      <div className="lg:hidden px-[1rem] py-[3rem] mt-[3.5rem] sm:mt-[3rem] md:mt-[4rem] text-white">
        <h1
          className="text-[4rem]  md:text-[5.5rem] font-rogbold font-semibold leading-tight text-center mb-6"
          style={{
            fontWeight: "600",
            letterSpacing: '0.2rem'
          }}
        >
          CAREER
        </h1>
        <p className="text-center text-[2rem]  md:text-[3rem] font-rogbold leading-tight mb-8 px-2">
          We create with passion, purpose, and play — because work should feel like something you love, not just something you do.
        </p>
      </div>
    </div>
  );
};

export default CarrersHero;
