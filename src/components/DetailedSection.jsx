import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailedSection = ({
  title,
  image,
  paragraph1,
  paragraph2,
  paragraph3,
  sammary,
}) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleDiscussClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/collaboration");
  };

  return (
    <div className="bg-black shadow-lg pb-10 py-8 lg:py-16 max-w-[90rem] mx-auto">
      <div className="w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-10 
        ">
          {/* Left Column - Image */}
          <div className="flex 
           ">
            <img
              src={image}
              alt="Strategic visualization"
              className="w-[650px] h-[1000px] mt-4 sm:mt-8 lg:mt-40 object-contain flex-shrink-0"
            />
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <h2 className="text-white font-montserrat text-[24px] font-normal leading-normal max-w-full ">
              {title}
            </h2>

            {/* Mobile: Summary or Expanded */}
            <div className="md:hidden">
              {!expanded ? (
                <>
                  <p className="text-[24px] text-[#A0A0A0] font-normal leading-normal font-montserrat">
                    {sammary}
                  </p>
                  <button
                    className="text-[#007AEC] text-[1rem] underline focus:outline-none mb-6 mt-4 font-montserrat"
                    onClick={() => setExpanded(true)}
                  >
                    View More
                  </button>
                  <button
                    className="flex items-center justify-center w-48 h-12 text-white border-2 border-white rounded-full bg-gray-900 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    onClick={handleDiscussClick}
                  >
                    Let's Discuss
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform -rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="lg:max-w-[555px]">
                  <p className="text-[24px] text-gray-400 font-normal leading-normal">
                    {paragraph1}
                  </p>
                  <p className="text-[24px] text-gray-400 font-normal leading-normal">
                    {paragraph2}
                  </p>
                  <p className="text-[24px] text-gray-400 font-normal leading-normal">
                    {paragraph3}
                  </p>
                  <p className="text-[24px] text-gray-400 font-normal leading-normal">
                    {paragraph3}
                  </p>
                  <button
                    className="text-blue-500 underline mt-4 focus:outline-none mb-10"
                    onClick={() => setExpanded(false)}
                  >
                    View Less
                  </button>
                  <button
                    className="flex items-center justify-center w-48 h-12 text-white border-2 border-white rounded-full bg-gray-900 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    onClick={handleDiscussClick}
                  >
                    Let's Discuss
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform -rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Desktop: Always show full content */}
            <div className="hidden md:flex flex-col">
              <p className="text-[#A0A0A0] font-montserrat text-[24px] font-normal leading-normal mb-8 max-w-full ">
                {paragraph1}
              </p>
              <p className="text-[#A0A0A0] font-montserrat text-[24px] font-normal leading-normal mb-8 max-w-full ">
                {paragraph2}
              </p>
              <p className="text-[#A0A0A0] font-montserrat text-[24px] font-normal leading-normal mb-8 max-w-full ">
                {paragraph3}
              </p>
              <button
                onClick={handleDiscussClick}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedSection;
