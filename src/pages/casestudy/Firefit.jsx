import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

function Firefit() {
  const content = {
    heading: {
      preTitle: "Helping",
      title: "Firefit",
      postTitle: "Spark a Movement in Everyday Wellness",
    },
    companyAccent: "#00FFEA",
    info: {
      about: "FIREFIT is a next-generation fitness band and smartwatch brand",
      industry: "Health & Fitness",
    },
    services: ["App Design", "Branding"],
    images: {
      one: "/Squanta Assets/Work/Rectangle 9664.png",
      two: "/Squanta Assets/Work/Rectangle 64.png",
      three: "/Squanta Assets/Work/Rectangle 9665.png",
      four: "/Squanta Assets/Work/vinayverma.png",
    },
    timeline: {
      intro:
        "FIREFIT is a next-generation fitness band and smartwatch brand designed to empower people of all lifestyles to move better, live smarter, and stay connected to their wellness goals. With intelligent health tracking, sleek design, and real-time coaching, FIREFIT turns everyday activity into lasting progress — no matter where you start.",
      duration: "06 Weeks",
      challenge: {
        description:
          "FIREFIT wanted to launch a new-age fitness wearable for the Indian market something more relatable than elite fitness trackers.",
        points: [
          "Build a bold, youthful brand that resonates with both first-time users and tech-savvy fitness lovers.",
          "Design a mobile app that’s intuitive, engaging, and motivating not intimidating like many fitness apps.",
        ],
      },
      solution: {
        description:
          "We approached the project with a focus on emotional connection and everyday usability:",
      },
      branding: {
        title: "BRANDING",
        points: [
          "Created a versatile visual identity that blends energy, trust, and simplicity",
          "Developed a color system and iconography reflecting movement, progress, and inclusivity",
          "Crafted a voice that’s motivating but friendly, avoiding corporate or overly techy tones",
        ],
      },
      appDesign: {
        title: "APP DESIGN",
        points: [
          "Designed a minimalist yet powerful interface, focused on daily goals, smart nudges, and community progress",
          "Built scalable components for tracking activity, sleep, heart rate, and wellness habits",
          "Integrated onboarding flows tailored for both beginners and experienced users",
        ],
      },
    },
    impact: [
      { percentage: 10, description: "Increase in Downloads" },
      { percentage: 8, description: "Increase in avg. Sell" },
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

export default Firefit;
