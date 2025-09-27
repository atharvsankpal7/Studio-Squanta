import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

function OFFTHRD() {
  const content = {
    heading: {
      preTitle: "Helping",
      title: "OFF-THRD",
      postTitle: "Spark a Movement in Fashion Madness",
    },
    companyAccent: "#F6893C",
    info: {
      about:
        "Off-Thrd is a next-generation fashion brand redefining style for Gen Z and beyond.",
      industry: "Clothing",
    },
    services: ["Shopify Store Setup", "Branding"],
    images: {
      one: "/Squanta Assets/Work/offthrd-1.png",
      two: "/Squanta Assets/Work/offthrd-2.png",
      three: "/Squanta Assets/Work/offthrd-3.png",
      four: "/Squanta Assets/Work/offthrd-4.png",
    },
    timeline: {
      intro:
        "OffThrd is a next-generation fashion brand designed to empower individuals of all to dress boldly, live confidently, and stay connected to their identity. With trend-forward design, versatile and everyday comfort, OffThrd turns daily wear into a statement of personality — no matter where you begin.",
      duration: "03 Weeks",
      challenge: {
        description:
          "OffThrd wanted to launch a new-age fashion brand for the Indian market — something more relatable than elite or fast-fashion labels.",
        points: [
          "Build a bold, youthful brand that resonates with both trendsetters and everyday wearers.",
          "Design a shopping experience that’s intuitive, engaging, and expressive — not cluttered like many e-commerce apps.",
        ],
      },
      solution: {
        description:
          "We approached the project with a focus on self-expression and everyday versatility:",
      },
      branding: {
        title: "BRANDING",
        points: [
          "Created a versatile visual identity that blends boldness, creativity, and inclusivity",
          "Developed a color system and iconography reflecting individuality, confidence, and culture",
          "Crafted a voice that’s stylish yet approachable, avoiding overly luxury or corporate tones",
        ],
      },
      appDesign: {
        title: "APP DESIGN",
        points: [
          "Designed a minimalist yet expressive interface, focused on discovery, personalization, and community style-sharing",
          "Built scalable components for browsing collections, styling outfits, and seamless checkout",
          "Integrated onboarding flows tailored for both fashion explorers and seasoned style enthusiasts",
        ],
      },
    },
    impact: [
      { percentage: 14, description: "Increase in Downloads" },
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
        title: "Cafe 10",
        countryFlag: "https://flagcdn.com/w20/us.png",
        description:
          "Rebranded Cafe 10 with a fresh identity and executed targeted digital marketing, boosting visibility, footfall, and conversions across channels.",
        tags: ["Rebranding", "Digital marketing"],
      },
    ],
  };

  return <CaseStudyLayout content={content} />;
}

export default OFFTHRD;
