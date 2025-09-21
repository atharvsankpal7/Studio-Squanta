import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScalableSolutions = () => {
    const navigate = useNavigate();

    return (
        <div id="first-section" className="min-h-screen flex items-center justify-center font-sans overflow-hidden box-border">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/121602-724710304.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[66.5rem] min-h-[32.125rem] py-8 flex flex-col justify-center items-center bg-[#20202050] border border-white rounded-[2rem] text-center">
                <h1 className="text-white mx-4 sm:mx-6 md:mx-auto max-w-[47.5rem] font-[Montserrat] font-semibold text-2xl sm:text-3xl md:text-[2rem] tracking-[0.1rem] leading-snug">
                    Scalable Digital Solutions for Startups & Enterprises
                </h1>

                <p className="text-white mt-8 sm:mt-[2.625rem] mx-4 sm:mx-6 md:mx-auto text-base sm:text-lg md:text-[1.25rem] font-medium tracking-[0.0625rem] font-[Montserrat] max-w-[40.875rem] leading-snug">
                    Altecht provides software development, cybersecurity, cloud, automation, and recruitment services empowering businesses to operate with greater speed, efficiency, and security
                </p>

                <button
                    onClick={() => navigate('/collaboration')}
                    className="group mt-8 sm:mt-[2.5625rem] w-full flex max-w-[12rem] sm:max-w-[14rem] md:max-w-[18.5rem] h-[3rem] sm:h-[3.5rem] md:h-[4rem] justify-center items-center gap-[0.5rem] sm:gap-[0.625rem] md:gap-[0.75rem] rounded-[3.5625rem] border-2 border-white bg-[#007AEC] text-white font-[Montserrat] font-semibold text-sm sm:text-base md:text-[1.247rem] hover:bg-black transition duration-300 mx-auto px-4 sm:px-6 md:px-8"
                >
                    <span>Let's Collaborate</span>
                    <span className="w-[0.999rem] h-[1.035rem] flex items-center justify-center">
                        {/* Inline SVG icon with hover rotation */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="0.875rem"
                            height="0.875rem"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="transition-transform duration-300 group-hover:rotate-[42deg]"
                        >
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1564 2.39408L0.682807 11.0978C0.308822 11.4416 0.283918 12.0246 0.627359 12.3982C0.971216 12.7721 1.55423 12.7971 1.92776 12.4536L11.4731 3.68477C11.4908 3.80102 11.4945 3.92015 11.4851 4.03961C11.229 7.19406 10.8301 12.1025 10.8301 12.1025C10.7889 12.6088 11.1663 13.0528 11.6726 13.0941C12.179 13.1353 12.6234 12.7575 12.6647 12.2511C12.6647 12.2511 13.0634 7.34357 13.3201 4.18871C13.395 3.26214 13.0852 2.34591 12.4628 1.6554C11.84 0.965301 10.961 0.562345 10.0318 0.541581L1.87041 0.359709C1.36284 0.347959 0.94077 0.751027 0.929435 1.25905C0.918552 1.76666 1.3212 2.18827 1.82923 2.19961L9.99057 2.38148C10.0461 2.38294 10.1015 2.387 10.1564 2.39408Z" fill="white" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ScalableSolutions;
