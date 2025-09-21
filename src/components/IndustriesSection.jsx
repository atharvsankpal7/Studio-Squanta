import React from 'react';
import { motion } from 'framer-motion';

// Industries data
const industries = [
    {
        category: 'Fintech',
        image: '/All Images Landing page Altecht/i1.jpg'
    },
    {
        category: 'Healthcare',
        image: '/All Images Landing page Altecht/i2.jpg'
    },
    {
        category: 'E-Commerce',
        image: '/All Images Landing page Altecht/i3.jpg'
    },
    {
        category: 'Education',
        image: '/All Images Landing page Altecht/i4.jpg'
    }
];

const IndustryCard = ({ category, image }) => (
    <div className="flex flex-col items-center flex-shrink-0">
        {/* Category Card */}
        <div className="inline-flex justify-center items-center flex-shrink-0 rounded-[1.09756rem] bg-black"
             style={{
                 height: "clamp(8rem, 6vw + 6rem, 11.1875rem)",
                 width: "clamp(14rem, 10vw + 12rem, 19.25rem)"
             }}>
            <span className="text-white font-montserrat font-semibold text-center"
                  style={{
                      fontSize: "clamp(1.25rem, 3vw + 0.8rem, 2.30181rem)"
                  }}>
                {category}
            </span>
        </div>
        
        {/* Image */}
        <div className="overflow-hidden rounded-[1.09756rem] flex-shrink-0"
             style={{
                 marginTop: "clamp(0.75rem, 1vw + 0.5rem, 1.25rem)",
                 width: "clamp(14rem, 10vw + 12rem, 19.23506rem)",
                 height: "clamp(8rem, 6vw + 6rem, 11.14044rem)"
             }}>
            <img
                src={encodeURI(image)}
                alt={category}
                loading="lazy"
                className="w-full h-full object-cover object-center"
            />
        </div>
    </div>
);

const IndustriesSection = () => {
    // Duplicate industries array for infinite scroll effect
    const infiniteIndustries = [...industries, ...industries, ...industries];

    return (
        <div className="w-full bg-white overflow-hidden"
             style={{
                 maxWidth: "90rem",
                 minHeight: "clamp(28rem, 18vw + 25rem, 58.4375rem)",
                 margin: "0 auto",
                 paddingLeft: "clamp(1rem, 3vw + 0.5rem, 0rem)",
                 paddingRight: "clamp(1rem, 3vw + 0.5rem, 0rem)"
             }}>
            
            {/* Heading */}
            <h2 className="text-black font-montserrat font-semibold text-center"
                style={{
                    fontSize: "clamp(2rem, 3vw + 1rem, 2.5rem)",
                    marginTop: "clamp(4rem, 6vw + 1rem, 5rem)",
                    marginBottom: "clamp(3rem, 6vw + 2rem, 11rem)",
                    lineHeight: "1.2"
                }}>
                Industries We Serve
            </h2>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-x-[1.81rem] justify-items-center">
                {industries.map((industry, index) => (
                    <IndustryCard
                        key={index}
                        category={industry.category}
                        image={industry.image}
                    />
                ))}
            </div>

            {/* Mobile/Tablet Infinite Carousel */}
            <div className="lg:hidden relative">
                <div className="overflow-hidden rounded-lg"
                     style={{
                         maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                         WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)"
                     }}>
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: ["0%", "-33.333%"]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: "300%" // 3 sets of industries
                        }}
                    >
                        {infiniteIndustries.map((industry, index) => (
                            <div key={index} className="flex-shrink-0">
                                <IndustryCard
                                    category={industry.category}
                                    image={industry.image}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;
