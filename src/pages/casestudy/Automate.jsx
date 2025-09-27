import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

function AUTOMATE() {
  const content = {
    heading: {
      preTitle: "Helping",
      title: "AUTOMATE",
      postTitle: "Redefine Smart Living with Connected Comfort",
    },
    companyAccent: "#3B82F6",
    info: {
      about:
        "Automate is a smart home brand simplifying device control for everyday comfort and beyond.",
      industry: "Smart Home & IoT",
    },
    services: ["Mobile App Design"],
    images: {
      one: "/Squanta Assets/Work/automate-1.png",
      two: "/Squanta Assets/Work/automate-2.png",
      three: "/Squanta Assets/Work/automate-3.png",
      four: "/Squanta Assets/Work/automate-4.png",
    },
    timeline: {
      intro:
        "Automate is a next-generation smart home brand designed to empower people of all lifestyles to live smarter, stay connected, and control devices effortlessly. With seamless app control, intelligent features, and sleek design, Automate turns everyday living into a connected experience – no matter where you begin.",
      duration: "01 Weeks",
      challenge: {
        description:
          "Automate wanted to launch as a new-age smart home brand for the Indian market – something more relatable than expensive or overly complex devices.",
        points: [
          "Build a bold, youthful brand that resonates with both first-time users and tech-savvy households.",
          "Design an experience that’s intuitive, engaging, and empowering – not complicated like many control apps.",
        ],
      },
      solution: {
        description:
          "We approached the project with a focus on simplicity, connectivity, and everyday comfort:",
      },
      branding: {
        title: "BRANDING",
        points: [
          "Created a versatile visual identity that blends innovation, trust, and inclusivity",
          "Developed a color system and iconography reflecting technology, lifestyle, and ease",
          "Crafted a voice that’s smart yet approachable, avoiding overly technical or corporate tones",
        ],
      },
      appDesign: {
        title: "APP & COLLATERAL DESIGN",
        points: [
          "Designed a minimalist yet powerful app, focused on quick controls, personalization, and seamless integration",
          "Built scalable components for managing appliances, automations, and real-time updates",
          "Integrated onboarding flows tailored for both new adopters and experienced smart home users",
        ],
      },
    },
    impact: [
      { percentage: 40, description: "More control" },
      { percentage: 30, description: "Reduced energy waste" },
      { percentage: 25, description: "Convenience" },
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
        description:
          "A next-generation fashion brand redefining style for Gen Z and beyond",
        tags: ["Shopify Store Setup", "Branding"],
      },
      {
        image: "/Squanta Assets/Work/trenddy-thumb.png",
        title: "TRENDY TABLE",
        countryFlag: "https://flagcdn.com/w20/in.png",
        description:
          "Relaunching a next-generation café brand with fresh menus, branding, and customer engagement strategies",
        tags: ["Branding", "Menu & Collateral Design"],
      },
    ],
  };

  return <CaseStudyLayout content={content} />;
}

export default AUTOMATE;
