import React from "react";

const services = [
  {
    imgSrc: "All Images Landing page Altecht/Rectangle 74.png",
    altText: "Cybersecurity",
    title: "Cybersecurity",
    description:
      "Protect your business with end-to-end security solutions that safeguard data, ensure compliance, and build digital trust.",
  },
  {
    imgSrc: "All Images Landing page Altecht/Rectangle 66.png",
    altText: "AI and Machine Learning",
    title: "AI/ML",
    description:
      "We help you harness AI/ML to unlock data-driven insights, automate workflows, and power smarter decision-making.",
  },
  {
    imgSrc: "All Images Landing page Altecht/Rectangle 68.png",
    altText: "App Development",
    title: "App Development",
    description:
      "From MVPs to enterprise apps, we design and build seamless, scalable, and user-friendly mobile and web applications.",
  },
  {
    imgSrc: "All Images Landing page Altecht/Rectangle 71.png",
    altText: "Custom Development",
    title: "Custom Development",
    description:
      "We craft tailor-made software solutions aligned with your business goals, driving efficiency, scalability, and growth.",
  },
  {
    imgSrc: "All Images Landing page Altecht/Rectangle 72.png",
    altText: "DevOps and Cloud Management",
    title: "DevOps and Cloud Management",
    description:
      "Optimize infrastructure with DevOps and cloud expertise- enabling faster delivery, resilience, and cost efficiency at scale.",
  },
];

const ServiceCard = ({ imgSrc, altText, title, description }) => (
  <div
    className="relative flex flex-col items-center bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    style={{
      width: "clamp(18rem, 6vw + 16rem, 24.125rem)",
      height: "clamp(28.9rem, 9.6vw + 25rem, 38.75rem)",
      flexShrink: 0,
      borderRadius: "clamp(2.7rem, 1vw + 2.2rem, 3.5625rem)",
      boxShadow: "5px 10px 20px 0 rgba(0, 0, 0, 0.25)",
      paddingTop: "clamp(1.1rem, 0.4vw + 1rem, 1.5rem)",
      paddingLeft: "clamp(1.1rem, 0.4vw + 1rem, 1.5rem)",
      paddingRight: "clamp(1.1rem, 0.4vw + 1rem, 1.5rem)",
      zIndex: 1,
    }}
  >
    <img
      src={imgSrc}
      alt={altText}
      className="object-cover"
      style={{
        width: "clamp(15.75rem, 5.4vw + 13.8rem, 21.125rem)",
        height: "clamp(13.6rem, 4.6vw + 11.9rem, 18.1875rem)",
        flexShrink: 0,
        borderRadius: "clamp(1.4rem, 0.5vw + 1.2rem, 1.875rem)",
        aspectRatio: "21.125 / 18.1875",
      }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/300x250/e2e8f0/e2e8f0?text=Image";
      }}
    />
    <div className="flex flex-col items-center">
      <h3
        className="text-black "
        style={{
          marginTop: "clamp(2.3rem, 0.8vw + 2rem, 3.12rem)",
          fontFamily: "Montserrat",
          fontSize: "clamp(1.5rem, 0.5vw + 1.3rem, 2rem)",
          fontWeight: 500,
          lineHeight: "normal",
          width: "clamp(14.3rem, 4.8vw + 12.6rem, 19.125rem)",
          minHeight: "clamp(3.6rem, 1.3vw + 3.2rem, 4.875rem)",
          marginBottom: "clamp(1.1rem, 0.3vw + 1rem, 1.44rem)",
        }}
      >
        {title}
      </h3>
      <p
        className="text-left"
        style={{
          width: "clamp(14.7rem, 4.9vw + 12.9rem, 19.625rem)",
          color: "#616161",
          fontFamily: "Montserrat",
          fontSize: "clamp(0.75rem, 0.25vw + 0.7rem, 1rem)",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        {description}
      </p>
    </div>
  </div>
);

const ServicesPage = () => {
  const cybersecurity = services[0];
  const rest = services.slice(1);

  return (
    <div
      className="bg-white font-sans antialiased text-gray-900 w-full  overflow-visible"
      style={{
        maxWidth: "90rem",
        flexShrink: 0,
        margin: "0 auto",
        padding: "0 1rem",
      }}
    >
      {/* Heading */}
      <div className="flex justify-start mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-[3rem]">
        <h1
          className="text-black font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] mb-4 sm:mb-6 md:mb-8 xl:mb-[1.81rem]"
          style={{
            maxWidth: "24.75rem",
            fontFamily: "Montserrat",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          Accelerate product development & cut go-to-market time.
        </h1>
      </div>

      {/* Layout: column by default and on tablet / iPad Pro,
          switch to side-by-side only at xl (>=1280px) */}
      <div className="flex flex-col xl:flex-row xl:items-stretch justify-between isolate">
        {/* Cybersecurity card (separate left column when xl, otherwise stacks) */}
        <div className="flex justify-center xl:self-end mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-0 ">
          <div
            className="relative flex flex-col items-center bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{
              width: "clamp(18rem, 6vw + 16rem, 24.125rem)",
              height: "clamp(28.9rem, 9.6vw + 25rem, 38.75rem)",
              flexShrink: 0,
              borderRadius: "clamp(2.7rem, 1vw + 2.2rem, 3.5625rem)",
              boxShadow: "5px 10px 20px 0 rgba(0, 0, 0, 0.25)",
              paddingTop: "clamp(1.1rem, 0.4vw + 1rem, 1.5rem)",
              paddingLeft: "clamp(1.1rem, 0.4vw + 1rem, 1.5rem)",
              paddingRight: "clamp(1.1rem, 0.4vw + 1rem, 1.5rem)",
              zIndex: 1,
            }}
          >
            <img
              src={cybersecurity.imgSrc}
              alt={cybersecurity.altText}
              className="object-cover"
              style={{
                width: "clamp(15.75rem, 5.4vw + 13.8rem, 21.125rem)",
                height: "clamp(13.6rem, 4.6vw + 11.9rem, 18.1875rem)",
                flexShrink: 0,
                borderRadius: "clamp(1.4rem, 0.5vw + 1.2rem, 1.875rem)",
                aspectRatio: "21.125 / 18.1875",
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x250/e2e8f0/e2e8f0?text=Image";
              }}
            />
            <div className="flex flex-col items-center">
              <h3
                className="text-black"
                style={{
                  marginTop: "clamp(2.3rem, 0.8vw + 2rem, 3.12rem)",
                  fontFamily: "Montserrat",
                  fontSize: "clamp(1.5rem, 0.5vw + 1.3rem, 2rem)",
                  fontWeight: 500,
                  lineHeight: "normal",
                  width: "clamp(14.3rem, 4.8vw + 12.6rem, 19.125rem)",
                  minHeight: "clamp(3.6rem, 1.3vw + 3.2rem, 4.875rem)",
                  marginBottom: "clamp(1.1rem, 0.3vw + 1rem, 1.44rem)",
                }}
              >
                {cybersecurity.title}
              </h3>
              <p
                className="text-left"
                style={{
                  width: "clamp(14.7rem, 4.9vw + 12.9rem, 19.625rem)",
                  color: "#616161",
                  fontFamily: "Montserrat",
                  fontSize: "clamp(0.75rem, 0.25vw + 0.7rem, 1rem)",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {cybersecurity.description}
              </p>
            </div>
          </div>
        </div>

        {/* Fixed spacer only on xl and above */}
        <div className="hidden xl:block w-[6.25rem]" />

        {/* Grid of 2x2 (other 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] sm:gap-[2.5rem] xl:gap-x-[1.4375rem] xl:gap-y-[1.625rem] place-items-center ">
          {rest.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
