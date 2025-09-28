import React from "react";
import Container from "./ui/Container";
import { Link } from "react-router-dom";

// Reusable Card Component
const WorkCard = ({
  image,
  title,
  countryFlag,
  description,
  tags,
  disableDescription,
  slug,
}) => {
  const card = (
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

  return slug ? (
    <Link
      to={`/casestudy/${slug}`}
      className="block group "
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {card}
    </Link>
  ) : (
    card
  );
};

// Featured Works Section
const FeaturedWorks = ({ disableDescription = false }) => {
  let featuredworks = [
    {
      image: "Squanta Assets/Rectangle 64.png",
      title: "FIREFIT",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Digitizing the sales experience for a leading healthcare band maker, saving millions in print costs",
      tags: ["Iconography", "Illustration", "Graphics"],
      // slug: "firefit",
    },
    {
      image: "Squanta Assets/Rectangle 65.png",
      title: "Cafe 10",
      countryFlag: "https://flagcdn.com/w20/us.png", // USA flag
      description:
        "Rebranded Cafe 10 with a fresh identity and executed targeted digital marketing, boosting visibility, footfall, and conversions across channels.",
      tags: ["Rebranding", "Digital marketing"],
      // slug: "cafe-10", // uncomment when case study JSON is added
    },
    {
      image: "Squanta Assets/CHRONICAL.png",
      title: "Chronical",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Curated headlines, topic follows, breaking notifications, and save-for-later reading across devices with seamless sync.",
      tags: ["Application", "Branding"],
      // slug: "chronical", // add when ready in caseStudies.js
    },
    {
      image: "Squanta Assets/Rectangle 67.png",
      title: "Trade Craft",
      countryFlag: "https://flagcdn.com/w20/us.png", // USA flag
      description:
        "Designed and developed a stock trading app with real-time data, advanced charts, alerts, and seamless order execution.",
      tags: ["Application", "Branding"],
      // slug: "trade-craft", // add when ready in caseStudies.js
    },
  ];
  let works = [
    {
      image: "Squanta Assets/Rectangle 64.png",
      title: "FIREFIT",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Digitizing the sales experience for a leading healthcare band maker, saving millions in print costs",
      tags: ["Iconography", "Illustration", "Graphics"],
      slug: "firefit",
    },
    {
      image: "Squanta Assets/t3.png",
      title: "TRENDDY",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Rebranded OFF-THRD with a fresh identity and executed targeted digital marketing, boosting visibility, footfall, and conversions across channels.",
      tags: ["Branding", "Digital marketing"],
      slug: "trenddy", // uncomment when case study JSON is added
    },
    {
      image: "Squanta Assets/Rectangle 66.png",
      title: "AUTOMATE",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Curated headlines, topic follows, breaking notifications, and save-for-later reading across devices with seamless sync.",
      tags: ["Application", "Branding"],
      slug: "automate", // add when ready in caseStudies.js
    },
    {
      image: "Squanta Assets/Rectangle 96.png",
      title: "OFF-THRD",
      countryFlag: "https://flagcdn.com/w20/us.png", // India flag
      description:
        "Curated headlines, topic follows, breaking notifications, and save-for-later reading across devices with seamless sync.",
      tags: ["Application", "Branding"],
      slug: "off-thrd", // add when ready in caseStudies.js
    },
    {
      image: "Squanta Assets/Rectangle 64.png",
      title: "FIREFIT",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Digitizing the sales experience for a leading healthcare band maker, saving millions in print costs",
      tags: ["Iconography", "Illustration", "Graphics"],
      // slug: "firefit",
    },
    {
      image: "Squanta Assets/Rectangle 65.png",
      title: "Cafe 10",
      countryFlag: "https://flagcdn.com/w20/us.png", // USA flag
      description:
        "Rebranded Cafe 10 with a fresh identity and executed targeted digital marketing, boosting visibility, footfall, and conversions across channels.",
      tags: ["Rebranding", "Digital marketing"],
      // slug: "cafe-10", // uncomment when case study JSON is added
    },
    {
      image: "Squanta Assets/CHRONICAL.png",
      title: "Chronical",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Curated headlines, topic follows, breaking notifications, and save-for-later reading across devices with seamless sync.",
      tags: ["Application", "Branding"],
      // slug: "chronical", // add when ready in caseStudies.js
    },
    {
      image: "Squanta Assets/Rectangle 67.png",
      title: "Trade Craft",
      countryFlag: "https://flagcdn.com/w20/us.png", // USA flag
      description:
        "Designed and developed a stock trading app with real-time data, advanced charts, alerts, and seamless order execution.",
      tags: ["Application", "Branding"],
      // slug: "trade-craft", // add when ready in caseStudies.js
    },
  ];

  works = disableDescription ? works : featuredworks;

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
          <a href="/work" className="cursor-pointer group">
            <div className="flex justify-center mt-12 cursor-pointer">
              <button className="flex justify-center items-center gap-2 text-white border border-white rounded-[57px] px-6 py-2 hover:bg-white hover:text-black  transition-all duration-300 hover:scale-105"
                style={{ width: 'clamp(10rem,20vw,12.3rem)', height: 'clamp(1.3rem,12vw,3.75rem)' }}
              >
                <span style={{ fontSize: 'clamp(14px, 2vw, 1rem)' }}>View All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
