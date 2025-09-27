import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

function Trenddy() {
  const content = {
    heading: {
      preTitle: "Helping",
      title: "THE TRENDDY TABLE",
      postTitle: "Accelerate Orders and Customer Engagement",
    },
    companyAccent: "#C16E3F",
    info: {
      about:
        "The Trenddy Table is a café brand redefining casual dining for food lovers and beyond.",
      industry: "Café",
    },
    services: ["Branding", "Menu & Collateral Design"],
    images: {
      one: "/Squanta Assets/Work/trenddy-1.png",
      two: "/Squanta Assets/Work/trenddy-2.png",
      three: "/Squanta Assets/Work/trenddy-3.png",
      four: "/Squanta Assets/Work/trenddy-4.png",
    },
    timeline: {
      intro:
        "The Trenddy Table is a next-generation café brand designed to inspire people of all tastes to eat joyfully, live mindfully, and stay connected to their cravings. With a refreshed menu, curated sales brochure, and welcoming design, The Trenddy Table turns everyday dining into a flavorful experience – no matter where you start.",
      duration: "02 Weeks",
      challenge: {
        description:
          "The Trenddy Table wanted to relaunch as a new-age café brand for the Indian market – something more relatable than generic or outdated eateries.",
        points: [
          "Build a bold, youthful brand that resonates with both food lovers and casual diners.",
          "Design a dining experience that’s intuitive, engaging, and expressive – not cluttered like many café menus.",
        ],
      },
      solution: {
        description: "We approached the project with a focus on flavor, community, and everyday joy:",
      },
      branding: {
        title: "BRANDING",
        points: [
          "Created a versatile visual identity that blends warmth, creativity, and inclusivity",
          "Developed a color system and iconography reflecting taste, freshness, and culture",
          "Crafted a voice that’s inviting yet stylish, avoiding overly formal or generic tones",
        ],
      },
      appDesign: {
        title: "MENU & COLLATERAL DESIGN",
        points: [
          "Designed a minimalist yet vibrant menu, focused on clarity, highlights, and easy choices",
          "Built scalable brochure layouts for promotions, events, and seasonal offers",
          "Integrated storytelling elements that showcase signature dishes and connect with both new and loyal customers",
        ],
      },
    },
    impact: [
      { percentage: 20, description: "Increase in Orders" },
      { percentage: 10, description: "Increase in avg. Sell" },
    ],
    works: [
      {
        image: "/Squanta Assets/Rectangle 65.png",
        title: "FIREFIT",
        countryFlag: "https://flagcdn.com/w20/in.png",
        description:
          "Digitizing the sales experience for a leading healthcare band maker, saving millions in print costs",
        tags: ["Iconography", "Illustration", "Graphics"],
      },
      {
        image: "/Squanta Assets/Rectangle 64.png",
        title: "OFF-THRD",
        countryFlag: "https://flagcdn.com/w20/in.png",
        description: "A next-generation fashion brand redefining style for Gen Z and beyond",
        tags: ["Shopify Store Setup", "Branding"],
      },
    ],
  };

  return <CaseStudyLayout content={content} />;
}

export default Trenddy;
