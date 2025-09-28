import React from "react";
import Container from "./ui/Container";

const ServiceGrid = () => {
  const sections = [
    {
      title: "Branding",
      description:
        "We develop strategic brand foundations that foster recognition and recall - seamlessly integrating strategy, design, and messaging into cohesive identities that resonate with customers and leave a lasting impression.",
      rightColumnServices: [
        "Strategy & Positioning",
        "Visual Identity",
        "Packaging Design",
        "Customer Experience",
      ],
      leftColumnServices: [
        "Brand Guidelines",
        "Technical Strategy",
        "Brand Messaging",
        "Voice & Tone",
      ],
    },
    {
      title: "UX / UI Design",
      description:
        "Our UX/UI approach blends research, strategy, and design to create experiences that feel effortless - maximizing engagement, retention, and customer satisfaction.",
      rightColumnServices: [
        "UX Research",
        "Design Audit",
        "Strategy & Ideation",
        "Experience Design",
        "Information Mapping",
        "Low-Fi",
      ],
      leftColumnServices: [
        "Interaction Design",
        "User Interface",
        "Prototyping",
        "Usability Testing",
        "Wireframing",
        "Hi-Fi",
      ],
    },
    {
      title: "Content & Creative",
      description:
        "We develop brand-aligned content that not only grabs attention but inspires action - engineered for impact across fast-evolving digital channels.",
      rightColumnServices: [
        "Ad Design",
        "Landing Pages",
        "Graphic Design",
        "Copywriting",
        "Video Production",
        "Motion & Animation",
      ],
      leftColumnServices: ["Organic Content", "Art Direction"],
    },
    {
      title: "Marketing & Growth",
      description:
        "We help brands accelerate growth through full-funnel marketing, data-led creative, and performance strategies that turn attention into action and keep customers engaged.",
      rightColumnServices: [
        "Digital Marketing",
        "Influencer & UGC",
        "Digital Campaigns",
        "SEO",
        "Market Research",
        "Consumer Insights",
      ],
      leftColumnServices: [
        "Paid Advertising",
        "Roadmaps & Consulting",
        "Analytics and Reporting",
      ],
    },
  ];

  return (
    <Container className="bg-black pt-16 md:pt-24 lg:pt-[9.62rem]">
      {sections.map((section, idx) => (
        <div key={idx} className="flex flex-col w-full text-white mb-[120px] md:mb-[435px] lg:mb[850px]  ">
          <h2
            className=" font-alan-sans  uppercase text-[40px] md:text-[55px] font-[700] xl:text-[86.011px] leading-normal"
          >
            {section.title}
          </h2>

          <div
            className="w-full h-[2px] mb-[16px]"
            style={{
              background: "linear-gradient(90deg, #444 0%, #FFF 50%, #444 100%)",
            }}
          ></div>

          <p className="text-[#9E9E9E] font-alan-sans text-[16px] font-semibold leading-normal sm:max-w-[568px]">
            {section.description}
          </p>

          <div className="flex flex-col md:flex-row-reverse md:gap-8 mt-10 gap-3">
            <div className="flex flex-col gap-y-3">
              {section.leftColumnServices.map((service, i) => (
                <div
                  key={i}
                  className="text-white font-alan-sans text-base font-semibold uppercase leading-normal hover:text-squanta-green transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-y-3">
              {section.rightColumnServices.map((service, i) => (
                <div
                  key={i}
                  className="text-white font-alan-sans text-base font-semibold uppercase leading-normal hover:text-squanta-green transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ServiceGrid;
