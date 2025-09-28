import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = {
    col1: [
      { name: "About", path: "/know-more" },
      { name: "Services", path: "/services" },
      { name: "Clients", path: "/client" },
    ],
    col2: [
      { name: "Work", path: "/work" },
      { name: "Contact", path: "/collaboration" },
      { name: "Careers", path: "/careers" },
    ],
  };

  return (
    <div className="w-full z-50 bg-black md:border-0 border-t-2 border-[#00FF26]">
      <footer
        className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-[3.75rem] bg-black text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
          minHeight: "min(50.375rem, 100vh)",
        }}
      >
        {/* CONTACT US Text */}
        <div className="pt-8 md:pt-10 lg:pt-[6.19rem] px-10">
          <h1 className="text-white text-left text-md font-alan-sans ">
            CONTACT US
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="font-alan-sans flex flex-col lg:flex-row justify-between mt-6 md:mt-8 lg:mt-[2.06rem] px-10 gap-8 lg:gap-12 xl:gap-0">
          {/* Left Column */}
          <div className="flex flex-col items-start flex-1">
            {/* Let's Discuss Text */}
            <h2 className="text-white text-left text-[18.778px] md:text-[27px] lg:text-[38px] font-[700] md:w-[357px] break-auto">
              Let's Discuss Your Vision. With US
            </h2>

            {/* Schedule Call Button */}
            <button className="flex justify-center items-center bg-black border border-[#00FF26] rounded-full hover:cursor-pointer group mt-4 px-4 sm:px-6 py-2 w-full sm:w-auto lg:w-[18rem] lg:h-[2.75rem] transition-all duration-300">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 md:mt-8 lg:mt-[5rem] gap-3 sm:gap-4 font-alan-sans">
              <span
                className="text-white break-all md:text-[32px] text-[20px]"
                style={{
                  fontSize: "",
                  fontStyle: "normal",
                  lineHeight: "normal",
                }}
              >
                hello@studiosquanta.com
              </span>
              <button className="hover:cursor-pointer sm:ml-[1.69rem] w-12 sm:w-16 sm:h-16 lg:w-[4.05156rem] lg:h-[2.10369rem] transform hover:scale-105 transition-transform self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 65 34"
                  fill="none"
                  className="w-full h-full"
                >
                  <g clipPath="url(#clip0_394_629)">
                    <rect
                      width="64.8251"
                      height="33.6592"
                      rx="16.8296"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.798 11.3872L25.3296 24.1641C24.8374 24.6689 24.8046 25.5247 25.2566 26.0731C25.7092 26.6221 26.4765 26.6586 26.9681 26.1545L39.5309 13.2819C39.5542 13.4526 39.5591 13.6275 39.5468 13.8028C39.2096 18.4335 38.6848 25.639 38.6848 25.639C38.6305 26.3823 39.1272 27.0341 39.7936 27.0946C40.46 27.1552 41.0449 26.6005 41.0992 25.8573C41.0992 25.8573 41.6241 18.653 41.9618 14.0217C42.0604 12.6615 41.6527 11.3165 40.8335 10.3028C40.0138 9.28978 38.857 8.69825 37.634 8.66777L26.8926 8.40078C26.2246 8.38353 25.6691 8.97523 25.6542 9.721C25.6398 10.4662 26.1698 11.0851 26.8384 11.1017L37.5798 11.3687C37.6528 11.3709 37.7258 11.3768 37.798 11.3872Z"
                      fill="white"
                    />
                  </g>
                  <rect
                    x="0.623318"
                    y="0.623318"
                    width="63.5785"
                    height="32.4126"
                    rx="16.2063"
                    stroke="#00FF26"
                    strokeWidth="1.24664"
                  />
                  <defs>
                    <clipPath id="clip0_394_629">
                      <rect
                        width="64.8251"
                        height="33.6592"
                        rx="16.8296"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="text-left w-full lg:w-auto flex-1 lg:flex-none">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-16 gap-y-4 sm:gap-y-6 justify-items-center">
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {navLinks.col1.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-white font-medium leading-normal hover:opacity-75 transition-opacity duration-200 py-1 md:text-[24px] text-[14px]"
                    style={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
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
                    className="text-white font-medium leading-normal md:text-left text-center hover:opacity-75 transition-opacity duration-200 py-1 md:text-[24px] text-[14px]"
                    style={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center mt-8 sm:mt-10 lg:mt-[5.59rem]">
              <div className=" w-[11.875rem] md:w-[14.5rem] lg:w-[18.875rem] h-12 sm:h-14 lg:h-[3rem] border border-white rounded-[3.125rem] bg-black flex justify-center items-center gap-6 sm:gap-8 lg:gap-[3.125rem] px-4">
                <Link
                  to="#"
                  aria-label="Our Google page"
                  className="hover:opacity-75 transition-opacity duration-200"
                >
                  <img
                    src="/icons/google.png"
                    alt="Google"
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[2.375rem] lg:h-[2.375rem]"
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/altecht_/"
                  aria-label="Our Instagram profile"
                  className="hover:opacity-75 transition-opacity duration-200"
                >
                  <img
                    src="/icons/insta.png"
                    alt="Instagram"
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[2.375rem] lg:h-[2.375rem]"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/altecht/"
                  aria-label="Our LinkedIn profile"
                  className="hover:opacity-75 transition-opacity duration-200"
                >
                  <img
                    src="/icons/linkedin_svgrepo.com.png"
                    alt="LinkedIn"
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[2.375rem] lg:h-[2.375rem]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- MODIFIED SECTION START --- */}
        {/* Bottom Section */}
        <div className="relative mt-8 sm:mt-10 lg:mt-[15rem] pb-6 sm:pb-8">
          {/* Dotted / Dashed Border with centered dash pattern */}
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="2"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="25,25"
              />
            </svg>
          </div>

          {/* Arrow Up Button — sits below border, centered */}
          <div className="flex justify-center mt-4">
            <button
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center bg-black border-2 border-white rounded-full shadow-lg hover:cursor-pointer w-10 h-10 sm:w-12 sm:h-12 lg:w-[3.07825rem] lg:h-[3.07825rem] hover:opacity-90 transition-opacity duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[1.8rem] lg:h-[1.8rem]"
                fill="none"
                stroke="#00FF26"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2 L12 22 M4 10 l8 -8 l8 8" />
              </svg>
            </button>
          </div>

          {/* Right - Footer Links */}
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="flex gap-3 sm:gap-6  py-3 md:py-0">
              {/* <img src="/icons/dribble_svgrepo.com.svg" alt="" />
              <img src="/icons/insta_svgrepo.com.svg" alt="" /> */}
            </div>
            <div className="flex flex-col sm:flex-row justify-end items-center gap-3 sm:gap-6 text-white text-center sm:text-right ">
              <Link
                to="#"
                className="hover:opacity-75 transition-opacity duration-200"
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="hover:opacity-75 transition-opacity duration-200"
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                SiteMap
              </Link>
              <span
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
                className="mt-2 sm:mt-0"
              >
                @{new Date().getFullYear()}, Altecht. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>

        {/* --- MODIFIED SECTION END --- */}
      </footer>
    </div>
  );
};

export default Footer;
