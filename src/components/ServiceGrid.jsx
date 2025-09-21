import React from 'react';

export default function ServicesGrid() {
  const leftServices = [
    "Strategy & Positioning",
    "Visual Identity", 
    "Packaging Design",
    "Customer Experience"
  ];

  const rightServices = [
    "Brand Guidelines",
    "Technical Strategy",
    "Brand Messaging",
    "Voice & Tone"
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Divider line */}

        {/* Main branding section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Title and description */}
          <div>
            <h2 className="font-orbitron text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase mb-8 leading-tight">
              BRANDING
            </h2>
        <div className="w-full h-px bg-gradient-to-r from-gray-600 via-white to-gray-600 mb-16"></div>

            
            <p className="font-montserrat text-gray-400 font-semibold text-base md:text-lg leading-relaxed">
              We develop strategic brand foundations that foster recognition and recall- seamlessly integrating strategy, design, and messaging into cohesive identities that resonate with customers and leave a lasting impression.
            </p>
          </div>

          {/* Right column - Placeholder for future content */}
          <div className="hidden lg:block">
            {/* This space can be used for images, additional content, etc. */}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
          {/* Left column */}
          <div className="space-y-6">
            {leftServices.map((service, index) => (
              <div key={index} className="font-montserrat text-white font-bold text-base uppercase tracking-wide">
                {service}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {rightServices.map((service, index) => (
              <div key={index} className="font-montserrat text-white font-bold text-base uppercase tracking-wide">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
