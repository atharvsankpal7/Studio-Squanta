import React from "react";

// Reusable TestimonialCard Component
const TestimonialCard1 = ({
  imgSrc,
  companyName,
  quote,
  authorName,
  authorTitle,
  className,
}) => {
  return (
    <div
      className={`relative bg-white border border-gray-200/80 shadow-md flex-shrink-0 ${
        className || ""
      } w-full sm:w-[28.64788rem]`}
      style={{
        height: "46.01475rem",
      }}
    >
      {/* Image */}
      <div className="mx-auto mt-[1.26rem] flex justify-center">
        <img
          src={imgSrc}
          alt={`${authorName}, ${authorTitle}`}
          className="w-11/12 h-auto object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image";
          }}
        />
      </div>

      <div className="px-[1.5rem]">
        {/* Company Name */}
        <h3
          className="font-[Montserrat]"
          style={{
            marginTop: "2.97rem",
            color: "#000",
            fontSize: "2.37494rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {companyName}
        </h3>

        {/* Testimonial Quote */}
        <p
          className="font-[Montserrat] mt-[2.95rem] text-[#616161] text-[1rem] sm:text-[1.1875rem] font-normal leading-normal w-full sm:w-[23.30425rem] px-2 sm:px-0"
        >
          {quote}
        </p>

        {/* Author Information */}
        <div style={{ marginTop: "2.81rem" }}>
          <p className="font-[Montserrat] font-semibold text-[#000] text-[1.0625rem] leading-normal">
            {authorName}
          </p>
          <p className="font-[Montserrat] text-sm text-gray-500">
            {authorTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const testimonials = [
    {
      imgSrc: "All Images Landing page Altecht/c1.png",
      companyName: "Karmic",
      quote:
        "“With Altecht’s custom solutions, we built a seamless platform that connects people and amplifies our mission.”",
      authorName: "Manindar K. S",
      authorTitle: "Director of Engineering, Karmic",
    },
    {
      imgSrc: "All Images Landing page Altecht/c2.png",
      companyName: "Off-Thrd",
      quote:
        "“Altecht helped us launch a stylish, scalable e-commerce platform that matches our brand’s energy.”",
      authorName: "M. D. Poleki",
      authorTitle: "Product Lead, Off-Thrd",
    },
    {
      imgSrc: "All Images Landing page Altecht/c3.png",
      companyName: "Wedify",
      quote:
        "“From planning to booking, Altecht designed an intuitive app that makes event management effortless.”",
      authorName: "Suwannee",
      authorTitle: "IT Infrastructure Lead, Wedify",
    },
    {
      imgSrc: "All Images Landing page Altecht/c4.png",
      companyName: "Smart Kisaan",
      quote:
        "“Their tech made farming smarter—easy access to tools, data, and services for real impact on the ground.”",
      authorName: "Maneesh P.",
      authorTitle: "Enterpreneur, Smart Kisan",
    },
  ];

  return (
    <div className="font-[Montserrat] antialiased text-gray-900 mt-[5rem] lg:mt-[18rem] mb-[7.08rem]">
      {/* Main Heading */}
      <div className="mb-10">
        <h1 className="font-semibold max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-widest leading-tight">
          Helping <span className="text-gray-500">ambitious</span> <br />
          <span className="text-gray-500">brands</span> bring big <br />
          ideas to life
        </h1>
      </div>

      <div
        className="flex flex-wrap justify-center mx-auto mt-4"
        style={{
          columnGap: "1.04rem",
          rowGap: "1.71rem",
          maxWidth: "122rem",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard1
            key={index}
            imgSrc={testimonial.imgSrc}
            companyName={testimonial.companyName}
            quote={testimonial.quote}
            authorName={testimonial.authorName}
            authorTitle={testimonial.authorTitle}
            className={
              index === 0
                ? "lg:mt-[3.94rem]" // 1st card offset down
                : index === 3
                ? "lg:-mt-[3.94rem]" // 4th card offset up
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
