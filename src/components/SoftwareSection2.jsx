import React from 'react';

const SoftwareSection2 = () => {
  // Static data array for the software cards
  const softwareData = [
    {
      id: 1,
      image: '/Squanta Assets/ss1.png',
      title: 'Finora',
      description: ['Marketing']
    },
    {
      id: 2,
      image: '/Squanta Assets/ss2.png',
      title: 'Off-Thrd',
      description: ['Branding']
    },
    {
      id: 3,
      image: '/Squanta Assets/ss3.png',
      title: 'T3 CAFA',
      description: ['Rebranding']
    },
    {
      id: 4,
      image: '/Squanta Assets/ss4.png',
      title: 'FIREFIT',
      description: ['Iconography', 'Illustration', 'App Design']
    },
    {
      id: 5,
      image: '/Squanta Assets/ss5.png',
      title: 'Wellnest Health',
      description: ['Rebranding', 'App Design (UI/UX)']
    },
    {
      id: 6,
      image: '/Squanta Assets/ss6.png',
      title: 'Cafa 10',
      description: ['Rebranding', 'Digital', 'Marketing']
    },

  ];

  return (
    <div className="bg-black py-8 sm:py-12 lg:pt-32 lg:pb-48 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto overflow-hidden">
        {/* Responsive grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {softwareData.map((item) => (
            <div
              key={item.id}
              className="relative w-full  mx-auto "
              style={{
                height: "clamp(14rem, 20vw, 18rem)",
                width: "clamp(14rem, 27vw, 25.625rem)",
                background:
                  "linear-gradient(0deg, #1C1C1C 0%, #1C1C1C 100%), #1C1C1C",
              }}
            >
              {/* Image at top left corner */}
              <img
                src={item.image}
                alt={item.title}
                className="sm:top-3 sm:left-3 lg:top-4 lg:left-4 object-contain"
                style={{
                  width: "clamp(4rem, 8vw, 6.25rem)",
                  height: "clamp(4rem, 8vw, 6.25rem)",
                }}
              />

              {/* Main text */}
              <div
                className="absolute font-alan-sans"
                style={{
                  bottom: "clamp(3rem, 6vw, 3.69rem)",
                  left: "1rem",
                  color: "#FFF",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: "0.05rem",
                }}
              >
                {item.title}
              </div>

              {/* Secondary text rendered as array */}
              <div
                className="absolute font-alan-sans"
                style={{
                  bottom: "clamp(1rem, 2.5vw, 1.63rem)",
                  left: "1rem",
                  color: "#FFF",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  fontWeight: 400,
                  lineHeight: "1.5rem",
                  maxWidth: "calc(100% - 2rem)", // Ensure it doesn't exceed the card width
                  whiteSpace: "nowrap", // Prevent wrapping
                  overflow: "hidden", // Hide overflowing text
                  textOverflow: "ellipsis", // Add ellipsis for overflow
                }}
              >
                {item.description.map((word, index) => (
                  <span key={index} className="mr-4">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SoftwareSection2;
