import React from "react";
import { motion } from "framer-motion";

// Reusable component for the list items on the right side.
export const ServiceItem = ({ text, delay, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ amount: 0.3 }}
  >
    {/* Service item container */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(1rem, 1.5vw + 0.5rem, 1.5rem)",
      }}
    >
      {/* Bullet icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        style={{
          width: "clamp(0.75rem, 1vw + 0.5rem, 1.0625rem)",
          height: "clamp(0.75rem, 1vw + 0.5rem, 1.0625rem)",
          flexShrink: 0,
        }}
      >
        <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
      </svg>

      {/* Text */}
      <span
        className="text-white font-montserrat"
        style={{
          fontSize: "1.5rem",
          fontWeight: 400,
          lineHeight: "normal",
          fontStyle: "normal"
        }}
      >
        {text}
      </span>
    </div>

    {/* Horizontal line */}
    {!isLast && (
      <div
        style={{
          width: "100%",
          height: "clamp(0.08rem, 0.1vw + 0.06rem, 0.125rem)",
          background: "#313131",
          marginTop: "clamp(0.8rem, 1vw + 0.5rem, 1.19rem)",
          marginBottom: "clamp(1rem, 1.2vw + 0.6rem, 1.31rem)",
        }}
      />
    )}
  </motion.div>
);

const Section = ({ title, description, services, onLearnMoreClick }) => (
  <div
    className="flex-shrink-0 w-full mx-3"
    style={{
      minHeight: "clamp(40rem, 15vw + 30rem, 50rem)",
      flexShrink: 0,
      overflow: "visible",
    }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.4 }}
        className="flex flex-col"
        style={{
          paddingTop: "clamp(1rem, 5vw + 0.5rem, 5rem)",
          paddingRight: "clamp(0.5rem, 1vw + 0.5rem, 1rem)",
          paddingBottom: "clamp(0.5rem, 1vw + 0.5rem, 1rem)",
        }}
      >
        {/* Heading */}
        <h1
          className="text-white font-montserrat lg:whitespace-nowrap"
          style={{
            fontSize: "clamp(1.6rem, 6vw + 0.8rem, 5.5rem)",
            fontWeight: 600,
            lineHeight: "normal",
            marginBottom: "clamp(1.5rem, 3vw + 1rem, 3.19rem)",
            maxWidth: "100%",
            wordBreak: "break-word",
          }}
        >
          {title}
        </h1>

        {/* Paragraph */}
        <p
          className="text-white font-montserrat"
          style={{
            width: "100%",
            maxWidth: "clamp(18rem, 90vw, 35.4375rem)",
            color: "#FFF",
            fontFamily: "Montserrat",
            fontSize: "1rem",
            fontStyle: "normal", 
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "clamp(2rem, 3vw + 1.5rem, 3.38rem)",
          }}
        >
          {description}
        </p>

        {/* Button */}
        <button
          onClick={onLearnMoreClick}
          className="
            group flex justify-center items-center 
            border-2 border-white bg-[#1B1B1B] text-white
            hover:bg-white hover:text-black hover:border-black hover:scale-105
            hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-white
            cursor-pointer
          "
          style={{
            display: "flex",
            width: "clamp(10rem, 12vw + 6rem, 18.5rem)",
            height: "clamp(2.5rem, 3vw + 2rem, 4rem)",
            padding: "clamp(0.4rem, 0.5vw + 0.3rem, 0.625rem)",
            gap: "clamp(0.5rem, 0.8vw + 0.3rem, 0.75rem)",
            flexShrink: 0,
            borderRadius: "clamp(2rem, 3vw + 1.5rem, 3.5625rem)",
          }}
        >
          {/* Button Text */}
          <span
            className="font-montserrat whitespace-nowrap"
            style={{
              flexShrink: 0,
              fontSize: "clamp(0.875rem, 1vw + 0.5rem, 1.24663rem)",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Learn More
          </span>

          {/* Arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="group-hover:rotate-[42.597deg]"
            style={{
              width: "clamp(0.875rem, 1vw + 0.5rem, 1.22713rem)",
              height: "clamp(0.875rem, 1vw + 0.5rem, 1.22713rem)",
              flexShrink: 0,
            }}
          >
            <g clipPath="url(#clip0_65_239)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6564 9.39408L8.18287 18.0978C7.80888 18.4416 7.78398 19.0246 8.12742 19.3982C8.47128 19.7721 9.05429 19.7971 9.42782 19.4536L18.9732 10.6848C18.9909 10.801 18.9945 10.9202 18.9852 11.0396C18.729 14.1941 18.3302 19.1025 18.3302 19.1025C18.289 19.6088 18.6664 20.0528 19.1727 20.0941C19.679 20.1353 20.1235 19.7575 20.1647 19.2511C20.1647 19.2511 20.5635 14.3436 20.8201 11.1887C20.895 10.2621 20.5852 9.34591 19.9629 8.6554C19.34 7.9653 18.4611 7.56234 17.5318 7.54158L9.37047 7.35971C8.8629 7.34796 8.44083 7.75103 8.4295 8.25905C8.41861 8.76666 8.82127 9.18827 9.32929 9.19961L17.4906 9.38148C17.5462 9.38294 17.6016 9.387 17.6564 9.39408Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_65_239">
                <rect
                  width="19.6343"
                  height="19.6343"
                  fill="white"
                  transform="translate(0.128662 13.418) rotate(-42.5966)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </motion.div>

      {/* Right Column - Aligned with navbar */}
      <div 
        className="flex flex-col pt-0 lg:pt-[19.87rem] pb-20 lg:pb-32 px-10 "
      >
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            text={service}
            delay={0.2 * index}
            isLast={index === services.length - 1}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Section;