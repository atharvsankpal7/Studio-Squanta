import React from "react";
import Container from "./ui/Container";

const ServiceGrid2 = () => {
  const sections = [
    {
      title: "Branding",
      description:
        ["We blend AI creativity with strategy to craft brand identities that truly connect. Tools like Midjourney, ChatGPT, and Photoshop help us build cohesive, visually rich brands. We also use Illustrator, Figma, and Canva AI for scalable systems and fast adaptations from voice to visuals, every detail feels future-ready."],
    },
    {
      title: "UX / UI Design",
      description:
        ["We create intuitive digital experiences powered by AI. From Galileo AI and UXPilot to Figma, Uizard, and Midjourney, we accelerate UX thinking and interface design.", "Tools like Framer and Anima help us prototype smarter and ship designs that feel effortless."],
    },
    {
      title: "Content & Creative",
      description:
        ["We blend storytelling with design to create content that captivates and converts. From ads and organic posts to landing pages and campaigns, every piece is purposeful. Using Photoshop, the Adobe Suite, Figma, and more, we deliver striking visuals, sharp copy, and seamless motion - keeping your brand fresh, engaging, and ahead."],
    },
    {
      title: "Marketing",
      description:
        ["Smarter tools, sharper campaigns. We use Firefly, Runway, and Descript for content that moves, while ChatGPT, Copy.ai, and Claude AI drive messaging and performance. With Freepik Reimagine, Notion AI, and Tome, we deliver creative assets, campaign decks, and launch strategies faster, and better."],
    },
  ];

  return (
    <section className="bg-black pt-16 md:pt-24 lg:pt-[13.75rem]">
      {sections.map((section, idx) => (
        <div key={idx} className="flex flex-col w-full text-white pb-[120px] md:pb-[330px] lg:pb[850px]  ">
          <h2
            className=" font-alan-sans  uppercase text-[40px] md:text-[55px] font-[700] xl:text-[86.011px] leading-normal"
          >
            {section.title}
          </h2>
          <div className="flex flex-col self-end text-base md:text-lg lg:text-xl w-full max-w-[33.5rem]">
            {section.description.map((para, pIdx) => (
              <p key={pIdx} className="">
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceGrid2;
