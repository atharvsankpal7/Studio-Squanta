import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = {
    col1: [
      { name: "About", path: "/know-more" },
      { name: "Work", path: "/work" },
      { name: "Careers", path: "/careers" },
    ],
    col2: [
      { name: "Contact", path: "/collaboration" },
      { name: "Services", path: "/services" },
      { name: "Clients", path: "/client" },
    ],
  };

  return (
    <div className="w-full z-50 bg-black">
      <footer
        className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-[3.75rem] bg-black text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
          minHeight: "min(50.375rem, 100vh)",
        }}
      >
        {/* CONTACT US Text */}
        <div className="pt-8 md:pt-10 lg:pt-[6.19rem] px-10">
          <h1 className="text-white text-left text-xl sm:text-2xl lg:text-3xl font-semibold">
            CONTACT US
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-6 md:mt-8 lg:mt-[2.06rem] px-10 gap-8 lg:gap-12 xl:gap-0">
          {/* Left Column */}
          <div className="flex flex-col items-start flex-1">
            {/* Let's Discuss Text */}
            <h2 className="text-white text-left text-lg sm:text-xl md:text-2xl lg:text-[2.01113rem] font-normal max-w-full lg:max-w-[19.4375rem] leading-tight">
              Let's Discuss Your Vision. With US
            </h2>

            {/* Schedule Call Button */}
            <button className="flex justify-center items-center bg-black border border-[#00FF26] rounded-full hover:cursor-pointer group mt-4 px-4 sm:px-6 py-2 w-full sm:w-auto lg:w-[18rem] lg:h-[2.75rem] transition-all duration-300 hover:bg-[#00FF26] hover:bg-opacity-10">
              <span className="text-white text-sm sm:text-base lg:text-[1.15281rem] font-semibold">
                Let's schedule a call
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[1.441rem] lg:h-[1.441rem] ml-2 group-hover:rotate-[42.597deg] transition-transform duration-300 ease-in-out"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.23074 16.8021L16.8376 7.19531M16.8376 7.19531H8.19143M16.8376 7.19531V15.8415"
                  stroke="white"
                  strokeWidth="1.92137"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Email and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 md:mt-8 lg:mt-[7.5rem] gap-3 sm:gap-4">
              <span className="text-white text-base sm:text-lg md:text-xl lg:text-[1.86994rem] font-medium break-all sm:break-normal">
                hello@studiosquanta.com
              </span>
              <button className="hover:cursor-pointer sm:ml-[1.69rem] w-12 h-12 sm:w-16 sm:h-16 lg:w-[4.05156rem] lg:h-[2.10369rem] transform hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 65 34"
                  fill="none"
                  className="w-full h-full"
                >
                  <g clipPath="url(#clip0_394_629)">
                    <rect width="64.8251" height="33.6592" rx="16.8296" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M37.798 11.3872L25.3296 24.1641C24.8374 24.6689 24.8046 25.5247 25.2566 26.0731C25.7092 26.6221 26.4765 26.6586 26.9681 26.1545L39.5309 13.2819C39.5542 13.4526 39.5591 13.6275 39.5468 13.8028C39.2096 18.4335 38.6848 25.639 38.6848 25.639C38.6305 26.3823 39.1272 27.0341 39.7936 27.0946C40.46 27.1552 41.0449 26.6005 41.0992 25.8573C41.0992 25.8573 41.6241 18.653 41.9618 14.0217C42.0604 12.6615 41.6527 11.3165 40.8335 10.3028C40.0138 9.28978 38.857 8.69825 37.634 8.66777L26.8926 8.40078C26.2246 8.38353 25.6691 8.97523 25.6542 9.721C25.6398 10.4662 26.1698 11.0851 26.8384 11.1017L37.5798 11.3687C37.6528 11.3709 37.7258 11.3768 37.798 11.3872Z" fill="white"/>
                  </g>
                  <rect x="0.623318" y="0.623318" width="63.5785" height="32.4126" rx="16.2063" stroke="#00FF26" strokeWidth="1.24664"/>
                  <defs>
                    <clipPath id="clip0_394_629">
                      <rect width="64.8251" height="33.6592" rx="16.8296" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="text-left w-full lg:w-auto flex-1 lg:flex-none">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-16 gap-y-4 sm:gap-y-6">
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {navLinks.col1.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-white text-base sm:text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity duration-200 py-1"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {navLinks.col2.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-white text-base sm:text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity duration-200 py-1"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center mt-8 sm:mt-10 lg:mt-[5.59rem]">
              <div className="w-full max-w-[17.75rem] h-12 sm:h-14 lg:h-[3rem] border border-white rounded-[3.125rem] bg-black flex justify-center items-center gap-6 sm:gap-8 lg:gap-[3.125rem] px-4">
                <a href="#" aria-label="Our Google page" className="hover:opacity-75 transition-opacity duration-200">
                  <img 
                    src="/icons/google.png" 
                    alt="Google" 
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[2.375rem] lg:h-[2.375rem]" 
                  />
                </a>
                <a href="https://www.instagram.com/altecht_/" aria-label="Our Instagram profile" className="hover:opacity-75 transition-opacity duration-200">
                  <img 
                    src="/icons/insta.png" 
                    alt="Instagram" 
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[2.375rem] lg:h-[2.375rem]" 
                  />
                </a>
                <a href="https://www.linkedin.com/company/altecht/" aria-label="Our LinkedIn profile" className="hover:opacity-75 transition-opacity duration-200">
                  <img 
                    src="/icons/linkedin_svgrepo.com.png" 
                    alt="LinkedIn" 
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[2.375rem] lg:h-[2.375rem]" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 lg:mt-[15rem]">
          {/* Dotted Border */}
          <div className="h-[0.125rem] border-t-2 border-dashed border-white w-full my-6 sm:my-8"></div>

          {/* Bottom Content */}
          <div className="relative mt-6 sm:mt-8 pb-6 sm:pb-8">
            {/* Center - Arrow Up Button */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 sm:-top-10">
              <button
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex flex-col items-center justify-center bg-black border-2 border-white rounded-full hover:cursor-pointer w-10 h-10 sm:w-12 sm:h-12 lg:w-[3.07825rem] lg:h-[3.07825rem] p-2 lg:p-[0.625rem] hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 29"
                  fill="none"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[1.76456rem] lg:h-[1.82825rem]"
                  style={{
                    fill: "#FFF",
                    stroke: "#00FF26",
                  }}
                >
                  <mask id="path-1-inside-1_394_648" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7906 4.08267C12.8715 3.99919 13.0051 4.05972 13.0051 4.17598L12.9965 26.6057C12.9965 27.503 13.7248 28.2324 14.6211 28.2324C15.5185 28.2324 16.2478 27.5041 16.2478 26.6078L16.2573 4.34162C16.2574 4.07363 16.5509 3.92546 16.7334 4.12169C20.5288 8.22594 26.4342 14.6126 26.4342 14.6126C27.0433 15.2716 28.0718 15.3117 28.7308 14.7026C29.3897 14.0935 29.4298 13.0639 28.8207 12.405C28.8207 12.405 22.9163 6.01938 19.1209 1.91404C18.0057 0.708883 16.444 0.0163517 14.8021 9.53674e-05C13.1602 -0.0150776 11.5854 0.646025 10.4475 1.82951L0.453997 12.224C-0.168089 12.8699 -0.148582 13.9006 0.498432 14.5227C1.14545 15.1437 2.17503 15.1242 2.79712 14.4772L12.7906 4.08267Z"/>
                  </mask>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.7906 4.08267C12.8715 3.99919 13.0051 4.05972 13.0051 4.17598L12.9965 26.6057C12.9965 27.503 13.7248 28.2324 14.6211 28.2324C15.5185 28.2324 16.2478 27.5041 16.2478 26.6078L16.2573 4.34162C16.2574 4.07363 16.5509 3.92546 16.7334 4.12169C20.5288 8.22594 26.4342 14.6126 26.4342 14.6126C27.0433 15.2716 28.0718 15.3117 28.7308 14.7026C29.3897 14.0935 29.4298 13.0639 28.8207 12.405C28.8207 12.405 22.9163 6.01938 19.1209 1.91404C18.0057 0.708883 16.444 0.0163517 14.8021 9.53674e-05C13.1602 -0.0150776 11.5854 0.646025 10.4475 1.82951L0.453997 12.224C-0.168089 12.8699 -0.148582 13.9006 0.498432 14.5227C1.14545 15.1437 2.17503 15.1242 2.79712 14.4772L12.7906 4.08267Z" fill="white"/>
                  <path d="M12.9965 26.6057L6.99652 26.6034V26.6057H12.9965ZM16.2478 26.6078L10.2478 26.6053V26.6078H16.2478ZM26.4342 14.6126L30.8403 10.5399L30.8396 10.5392L26.4342 14.6126ZM28.8207 12.405L33.2267 8.33229L33.2261 8.33157L28.8207 12.405ZM19.1209 1.91404L23.5266 -2.15902L23.5247 -2.16107L19.1209 1.91404ZM14.8021 9.53674e-05L14.8615 -5.99961L14.8575 -5.99965L14.8021 9.53674e-05ZM10.4475 1.82951L6.12248 -2.32915L6.12223 -2.32888L10.4475 1.82951ZM0.453997 12.224L4.77565 16.3861L4.77925 16.3824L0.453997 12.224ZM0.498432 14.5227L-3.66008 18.8478L-3.65631 18.8514L0.498432 14.5227ZM2.79712 14.4772L7.12226 18.6357L7.12237 18.6355L2.79712 14.4772ZM16.2573 4.34162L22.2573 4.34418L16.2573 4.34162ZM13.0051 4.17598L7.00508 4.17369L13.0051 4.17598Z" fill="#00FF26" mask="url(#path-1-inside-1_394_648)"/>
                </svg>
              </button>
            </div>

            {/* Right - Footer Links */}
            <div className="flex flex-col sm:flex-row justify-end items-center gap-3 sm:gap-6 text-white text-center sm:text-right pt-8 sm:pt-0">
              <a href="#" className="hover:opacity-75 transition-opacity duration-200 text-xs sm:text-sm lg:text-base">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity duration-200 text-xs sm:text-sm lg:text-base">
                SiteMap
              </a>
              <span className="text-xs sm:text-sm lg:text-base mt-2 sm:mt-0">
                @{new Date().getFullYear()}, Altecht. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;