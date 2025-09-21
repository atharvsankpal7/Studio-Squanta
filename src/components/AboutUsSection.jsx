import React from "react";

const AboutUsSection = () => (
  <div
    className="flex flex-col bg-white w-full min-h-[40rem] sm:min-h-[45rem] md:min-h-[50rem] lg:min-h-[55rem] xl:min-h-[65.0625rem] "
    style={{
      maxWidth: "90rem",
      flexShrink: 0,
      margin: "0 auto"
    }}
  >
    {/* About us heading */}
    <h2
      className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.5rem] mt-6 mb-8 sm:mt-8 sm:mb-12 md:mt-10 md:mb-16 lg:mt-12 lg:mb-20 xl:mt-[2.31rem] xl:mb-[8.31rem]"
      style={{
        fontFamily: "Montserrat",
        fontWeight: 600,
        lineHeight: "normal",
      }}
    >
      About us
    </h2>

    {/* Cards container */}
    <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-[3.06rem]">
      {/* Card 1 */}
      <div
        className="inline-flex justify-center items-center bg-white w-2/3 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-none px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-16 xl:px-[2.375rem] xl:py-[4.75rem] rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] xl:rounded-[3.125rem]"
        style={{
          gap: "0.625rem",
          boxShadow: "6px 8px 28.1px 0 rgba(0, 122, 236, 0.20)",
        }}
      >
        <p
          className="text-black text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.5rem]"
          style={{
            maxWidth: "57.0625rem",
            alignSelf: "stretch",
            fontFamily: "Montserrat",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Altecht was founded with a solid vision to make{" "}
          <span style={{ fontWeight: 700 }}>
            advanced technology accessible
          </span>{" "}
          and impactful for businesses of all sizes.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="inline-flex justify-center items-center bg-white w-2/3 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-none px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-16 xl:px-[2.375rem] xl:py-[4.75rem] rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] xl:rounded-[3.125rem]"
        style={{
          gap: "0.625rem",
          boxShadow: "6px 8px 28.1px 0 rgba(0, 122, 236, 0.20)",
        }}
      >
        <p
          className="text-black text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.5rem]"
          style={{
            maxWidth: "57.0625rem",
            alignSelf: "stretch",
            fontFamily: "Montserrat",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          We{" "}
          <span style={{ fontWeight: 700 }}>
            design software, secure your systems, and find the right talent
          </span>{" "}
          for you. Powered by AI, delivered with trust and that's Altecht.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="inline-flex justify-center items-center bg-white w-2/3 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-none px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-16 xl:px-[2.375rem] xl:py-[4.75rem] rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] xl:rounded-[3.125rem]"
        style={{
          gap: "0.625rem",
          boxShadow: "6px 8px 28.1px 0 rgba(0, 122, 236, 0.20)",
        }}
      >
        <p
          className="text-black text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.5rem]"
          style={{
            maxWidth: "57.0625rem",
            alignSelf: "stretch",
            fontFamily: "Montserrat",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Our team brings together{" "}
          <span style={{ fontWeight: 700 }}>
            the best minds in technology, delivering premium services
          </span>{" "}
          with precision and care.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUsSection;