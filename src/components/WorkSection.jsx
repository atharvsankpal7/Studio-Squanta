import React from "react";
import Container from "./ui/Container";

// Reusable Card Component
const WorkCard = ({
  image,
  title,
  countryFlag,
  description,
  tags,
  disableDescription,
}) => {
  return (
    <div className="flex flex-col bg-black text-white overflow-hidden shadow-lg">
      {/* Image */}
      <div className="w-full overflow-hidden">
        <img src={image} alt={title} className="lg:w-[645px] lg:h-[618px]" />
      </div>

      {/* Content */}
      <div className="py-6 flex flex-col ">
        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {countryFlag && (
            <img
              src={countryFlag}
              alt="flag"
              className="w-5 h-5 object-cover rounded-full"
            />
          )}
        </div>

        {/* /* Description */}
        {!disableDescription && (
          <p
            className="text-base text-[16px] lg:text-[26px] text-gray-300 leading-tight mb-4 font-alan-sans"
            style={{
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "1.76px",
              minHeight: "6.1rem",
            }}
          >
            {description}
          </p>
        )}

        {/* Tags */}
        <div className="mt-auto min-h-[60px] lg:min-h-[90px] flex flex-wrap gap-5">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex justify-center items-center w-[118.925px] md:w-[159.925px] lg:w-[203px] h-[24.549px] lg:h-[42px] px-[10px] bg-[#2B2B2B] border border-white rounded-[33.393px] lg:rounded-4xl text-[clamp(9.327px,1.5vw,16px)]"
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              {tag} 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Featured Works Section
const FeaturedWorks = ({ disableDescription = false }) => {
  let works = [
    {
      image: "Squanta Assets/Rectangle 64.png",
      title: "FIREFIT",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Digitizing the sales experience for a leading healthcare band maker, saving millions in print costs",
      tags: ["Iconography", "Illustration", "Graphics"],
    },
    {
      image: "Squanta Assets/Rectangle 65.png",
      title: "Cafe 10",
      countryFlag: "https://flagcdn.com/w20/us.png", // USA flag
      description:
        "Rebranded Cafe 10 with a fresh identity and executed targeted digital marketing, boosting visibility, footfall, and conversions across channels.",
      tags: ["Rebranding", "Digital marketing"],
    },
    {
      image: "Squanta Assets/Rectangle 64.png",
      title: "FIREFIT",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Curated headlines, topic follows, breaking notifications, and save-for-later reading across devices with seamless sync.",
      tags: ["Iconography", "Illustration", "Graphics"],
    },
    {
      image: "Squanta Assets/Rectangle 67.png",
      title: "Cafe 10",
      countryFlag: "https://flagcdn.com/w20/us.png", // USA flag
      description:
        "Designed and developed a stock trading app with real-time data, advanced charts, alerts, and seamless order execution.",
      tags: ["Rebranding", "Digital marketing"],
    },
  ];

  works = disableDescription ? [...works, ...works] : works;

  return (
    <section className="bg-black py-12 px-6 md:px-12">
      <Container>
        {!disableDescription && (
          <h2 className="text-white mb-10 font-alan-sans font-normal text-[32px] md:text-[96.68px] xl:text-[64px] xl:font-bold">
            FEATURED WORKS
          </h2>
        )}

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-[65px] md:gap-y-[221px]">
          {works.map((work, i) => (
            <WorkCard
              key={i}
              {...work}
              disableDescription={disableDescription}
            />
          ))}
        </div>
        {!disableDescription && (
          <a href="/work" className="cursor-pointer">
            <div className="flex justify-center mt-12 cursor-pointer">
              <button className="flex items-center gap-2 text-white border border-white rounded-[57px] px-6 py-2 hover:bg-white hover:text-black ">
                <span>View All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className=" group-hover:translate-x-1"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </a>
        )}
      </Container>
    </section>
  );
};

export default FeaturedWorks;
