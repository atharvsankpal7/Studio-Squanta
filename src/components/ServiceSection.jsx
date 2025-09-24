import React from 'react';

/**
 * Reusable ServiceSection component for individual service categories
 * @param {string} title - The main title of the service section
 * @param {string} description - Description text for the service
 * @param {Array} services - Array of service items to display
 * @param {string} className - Additional CSS classes
 */
const ServiceSection = ({
  title,
  description,
  services = [],
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Title */}
      <h2
        className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rogbold font-normal uppercase leading-tight"
      >
        {title}
      </h2>

      {/* Gradient Line */}
      <div className="w-full h-px bg-gradient-to-r from-gray-600 via-white to-gray-600"></div>

      {/* Description */}
      <p className="text-gray-400 font-montserrat font-semibold text-sm sm:text-base md:text-lg leading-normal px-2 max-w-2xl mx-auto">
        {description}
      </p>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-white font-montserrat font-bold text-sm sm:text-base uppercase leading-normal text-center sm:text-left hover:text-squanta-green transition-colors duration-300"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
