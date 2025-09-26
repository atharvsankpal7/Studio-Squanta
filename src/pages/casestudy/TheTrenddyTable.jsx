import React, { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
// Import the useInView hook from the library
import { useInView } from "react-intersection-observer";

// Modified CountUp component to accept a 'start' prop
const CountUp = ({ end, duration = 2000, start = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only start the animation if the 'start' prop is true
    if (!start) return;

    let startVal = 0;
    // Calculate the increment to reach the end value in the specified duration
    const increment = end / (duration / 16); // Aiming for ~60fps

    const timer = setInterval(() => {
      startVal += increment;
      if (startVal >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(startVal));
      }
    }, 16); // Update every ~16ms

    // Cleanup function to clear the interval
    return () => clearInterval(timer);
  }, [end, duration, start]); // Rerun effect if 'start' changes

  return <>{count}</>;
};

function Trenddy() {
  const c = {
  "heading": {
    "preTitle": "Helping",
    "title": "THE TRENDDY TABLE",
    "postTitle": "Accelerate Orders and Customer Engagement"
  },
  "companyAccent": "#C16E3F",
  "info": {
    "about": "The Trenddy Table is a café brand redefining casual dining for food lovers and beyond.",
    "industry": "Café"
  },
  "services": ["Branding", "Menu & Collateral Design"],
  "images": {
    "one": "/Squanta Assets/Work/trenddy-1.png",
    "two": "/Squanta Assets/Work/trenddy-2.png",
    "three": "/Squanta Assets/Work/trenddy-3.png",
    "four": "/Squanta Assets/Work/trenddy-4.png"
  },
  "timeline": {
    "intro": "The Trenddy Table is a next-generation café brand designed to inspire people of all tastes to eat joyfully, live mindfully, and stay connected to their cravings. With a refreshed menu, curated sales brochure, and welcoming design, The Trenddy Table turns everyday dining into a flavorful experience – no matter where you start.",
    "duration": "02 Weeks",
    "challenge": {
      "description": "The Trenddy Table wanted to relaunch as a new-age café brand for the Indian market – something more relatable than generic or outdated eateries.",
      "points": [
        "Build a bold, youthful brand that resonates with both food lovers and casual diners.",
        "Design a dining experience that’s intuitive, engaging, and expressive – not cluttered like many café menus."
      ]
    },
    "solution": {
      "description": "We approached the project with a focus on flavor, community, and everyday joy:"
    },
    "branding": {
      "title": "BRANDING",
      "points": [
        "Created a versatile visual identity that blends warmth, creativity, and inclusivity",
        "Developed a color system and iconography reflecting taste, freshness, and culture",
        "Crafted a voice that’s inviting yet stylish, avoiding overly formal or generic tones"
      ]
    },
    "appDesign": {
      "title": "MENU & COLLATERAL DESIGN",
      "points": [
        "Designed a minimalist yet vibrant menu, focused on clarity, highlights, and easy choices",
        "Built scalable brochure layouts for promotions, events, and seasonal offers",
        "Integrated storytelling elements that showcase signature dishes and connect with both new and loyal customers"
      ]
    }
  },
  "impact": [
    { "percentage": 20, "description": "Increase in Orders" },
    { "percentage": 10, "description": "Increase in avg. Sell" }
  ],
  "works": [
    {
      "image": "/Squanta Assets/Rectangle 65.png",
      "title": "FIREFIT",
      "countryFlag": "https://flagcdn.com/w20/in.png",
      "description": "Digitizing the sales experience for a leading healthcare band maker, saving millions in print costs",
      "tags": ["Iconography", "Illustration", "Graphics"]
    },
    {
      "image": "/Squanta Assets/Rectangle 64.png",
      "title": "OFF-THRD",
      "countryFlag": "https://flagcdn.com/w20/in.png",
      "description": "A next-generation fashion brand redefining style for Gen Z and beyond",
      "tags": ["Shopify Store Setup", "Branding"]
    }
  ]
}


  let works = [
    {
      image: "/Squanta Assets/Rectangle 65.png",
      title: "FIREFIT",
      countryFlag: "https://flagcdn.com/w20/in.png", // India flag
      description:
        "Digitizing the sales experience for a leading healthcare band maker, saving millions in print costs",
      tags: ["Iconography", "Illustration", "Graphics"],
    },
    {
      image: "/Squanta Assets/Rectangle 64.png",
      title: "Cafe 10",
      countryFlag: "https://flagcdn.com/w20/us.png", // USA flag
      description:
        "Rebranded Cafe 10 with a fresh identity and executed targeted digital marketing, boosting visibility, footfall, and conversions across channels.",
      tags: ["Rebranding", "Digital marketing"],
    },
   
  ];

  // Setup the useInView hook for the impact section
  const { ref: impactSectionRef, inView: isImpactSectionVisible } = useInView({
    // The animation will only trigger once
    triggerOnce: true,
    // Trigger when the element is 10% visible
    threshold: 0.5,
  });

  return (
    <div className="bg-black text-white font-montserrat">
      <Container className="pt-20">
        <div>
          <h1 className="text-5xl lg:text-[60px] xl:text-[64px] font-rogbold max-w-4xl pb-20">
            <span>{c.heading.preTitle}</span>{" "}
            <span style={{ color: c.companyAccent }}>{c.heading.title}</span>{" "}
            <span>{c.heading.postTitle}</span>
          </h1>

          <hr
            className="w-full h-[14px] flex-shrink-0 border-0 mb-6"
            style={{ backgroundColor: c.companyAccent }}
          />

          {/* About section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
            <div className="max-w-[244px]">
              <h5 className="text-xl font-semibold mb-12">ABOUT</h5>
              <p className="text-[#A6A6A6] text-base font-semibold">
                {c.info.about}
              </p>
            </div>
            <div className="max-w-[244px]">
              <h5 className="text-xl font-semibold mb-12">INDUSTRY</h5>
              <p className="text-[#A6A6A6] text-base font-semibold">
                {c.info.industry}
              </p>
            </div>
            <div className="max-w-[244px]">
              <h5 className="text-xl font-semibold mb-12">SERVICES</h5>
              <div className="flex flex-col gap-4">
                {c.services.map((service, i) => (
                  <div
                    key={i}
                    className="text-[#A6A6A6] font-semibold text-base uppercase"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[244px]">
              <h5 className="text-xl font-semibold mb-12">LOCATION</h5>
              <div>
                <img src="/Squanta Assets/India.png" alt="India Flag" />
              </div>
            </div>
          </div>

          <img src={c.images.one} alt="Firefit preview" className="mb-16" />

          {/* Timeline Intro */}
          <h6 className="text-xl font-rogbold pb-16 max-w-full">
            {c.timeline.intro}
          </h6>

          <div className="flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-28 py-12 text-[16px]">
            {/* Left Column */}
            <div className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
              <h3 className="text-[#787878] font-medium uppercase tracking-wider mb-5">
                TIMELINE
              </h3>
              <p className="text-white text-base">{c.timeline.duration}</p>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-3/4 lg:w-4/5 space-y-5">
              {/* Challenge Section */}
              <div>
                <h3 className="text-[#787878] font-medium uppercase tracking-wider mb-5">
                  CHALLENGE
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {c.timeline.challenge.description}
                </p>
                <p className="text-gray-300 leading-relaxed ">The challenge?</p>
                <ul className="text-gray-300 leading-relaxed ">
                  {c.timeline.challenge.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Solution Section */}
              <div>
                <h3 className="text-[#787878] font-medium uppercase tracking-wider ">
                  SOLUTION
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {c.timeline.solution.description}
                </p>
              </div>

              {/* Branding Section */}
              <div>
                <h3 className="text-[#787878] font-medium uppercase tracking-wider">
                  {c.timeline.branding.title}
                </h3>
                <ul className="text-gray-300 leading-relaxed ">
                  {c.timeline.branding.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* App Design Section */}
              <div>
                <h3 className="text-[#787878] font-medium uppercase tracking-wider">
                  {c.timeline.appDesign.title}
                </h3>
                <ul className="text-gray-300 leading-relaxed s">
                  {c.timeline.appDesign.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <img src={c.images.two} alt="" />

          {/* The Impact Section */}
          <div className="pt-24 pb-20">
            <h2 className="text-5xl font-rogbold uppercase mb-20">
              THE IMPACT
            </h2>
            {/* Attach the ref to this container */}
            <div
              ref={impactSectionRef}
              className="flex flex-col md:items-end gap-16"
            >
              {c.impact.map((item, i) => (
                <div key={i} className="flex items-center justify-start">
                  <span className="text-8xl font-light mr-4 w-48 text-left">
                    {/* Pass the visibility state to the CountUp component */}
                    <CountUp
                      end={item.percentage}
                      start={isImpactSectionVisible}
                    />
                    %
                  </span>
                  <p className="text-white text-lg">{item.description}</p>
                </div>
              ))}
            </div>
            <img src={c.images.three} alt="" className="my-20 " />
            <img src={c.images.four} alt="" className="mb-20 md:px-20" />
            <div>
              <h2 className="text-white font-rogbold font-normal text-[32px] md:text-[96.68px] mb-20">
                Discover More
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {works.map((work, i) => (
                  <WorkCard key={i} {...work} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}


const WorkCard = ({
  image,
  title,
  countryFlag,
  description,
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
            className="text-base text-[16px] lg:text-[26px] text-gray-300 leading-tight  mb-4 font-rogbold"
            style={{ letterSpacing: "0.18106rem", minHeight: "6.1rem" }}
          >
            {description}
          </p>
        )}


      </div>
    </div>
  );
};
export default Trenddy;
