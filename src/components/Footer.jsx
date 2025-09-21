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
    <>
      {/* Mobile Footer */}
      <footer
        className="lg:hidden w-full bg-black text-white px-[1rem] py-[2rem]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {/* Social Media Icons */}
        <div className="flex justify-center mb-[2rem]">
          <div className="w-[12rem] h-[2.5rem] border border-white rounded-[2rem] bg-black flex justify-center items-center gap-[2rem]">
            <a
              href="#"
              aria-label="Our Google page"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/Google.png"
                alt="Google"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </a>
            <a
              href="https://www.instagram.com/altecht_/"
              aria-label="Our Instagram profile"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/Instagram.png"
                alt="Instagram"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/altecht/"
              aria-label="Our LinkedIn profile"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src="/All Images Landing page Altecht/linkedin_svgrepo.com.svg"
                alt="LinkedIn"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </a>
          </div>
        </div>

        {/* Schedule Call Button */}
        <button
          className="flex justify-center items-center bg-black border border-green-500 rounded-full hover:cursor-pointer group mx-auto mb-4 w-full md:w-auto"
          style={{
            marginTop: "1rem",
            width: "16.375rem",
            height: "2.75rem",
            padding: "0.12925rem",
            gap: "0.12925rem",
            flexShrink: 0,
            borderRadius: "3.0625rem",
            borderColor: "#00FF26",
          }}
        >
          <span
            className="text-white text-sm lg:text-base"
            style={{
              fontSize: "clamp(0.9rem, 1.15281rem, 1.15281rem)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Let's schedule a call
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.441rem"
            height="1.441rem"
            viewBox="0 0 24 24"
            fill="none"
            style={{ flexShrink: 0 }}
            className="group-hover:rotate-[42.597deg] transition-transform duration-300 ease-in-out"
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

        {/* Email with Right-aligned Icon */}
        <div className="flex flex-col items-center justify-between mb-[2rem]">
          <h2 className="text-[1.5rem] sm:text-[2rem] font-medium">
            Hello@Altecht.com
          </h2>
          <button aria-label="Send email" className="self-end mr-17">
            <div className="w-[3.5rem] h-[1.6rem] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="34"
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
            </div>
          </button>
        </div>

        {/* Navigation Links - 2 Columns */}
        <div className="grid justify-items-center grid-cols-2 gap-x-[2rem] gap-y-[1rem] mb-[2rem]">
          {navLinks.col1.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[1rem] font-medium hover:opacity-75 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {link.name}
            </Link>
          ))}
          {navLinks.col2.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[1rem] font-medium hover:opacity-75 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col items-center gap-[0.75rem] mb-[1.5rem] text-center">
          <a href="#" className="text-[0.875rem] hover:opacity-75">
            Privacy Policy
          </a>
          <a href="#" className="text-[0.875rem] hover:opacity-75">
            SiteMap
          </a>
          <span className="text-[0.875rem]">
            @2025, Altecht. All Rights Reserved.
          </span>
        </div>

        {/* Scroll Up Icon */}
        <div className="flex justify-center">
          <button
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 69 69"
              fill="none"
              className="flex-shrink-0"
            >
              <rect
                x="0.5"
                y="0.5"
                width="68"
                height="68"
                rx="34"
                fill="black"
              />
              <rect
                x="0.5"
                y="0.5"
                width="68"
                height="68"
                rx="34"
                stroke="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.2267 23.4004L33.2172 49.1562C33.2172 50.1733 34.0139 51 34.9944 51C35.976 51 36.7739 50.1745 36.7739 49.1586L36.7846 23.2088C36.9731 23.3402 37.1474 23.4962 37.305 23.6719C41.4569 28.3238 47.917 35.5627 47.917 35.5627C48.5833 36.3096 49.7084 36.3551 50.4293 35.6647C51.1501 34.9743 51.194 33.8074 50.5277 33.0605C50.5277 33.0605 44.0687 25.8228 39.9168 21.1696C38.6969 19.8037 36.9885 19.0187 35.1924 19.0003C33.3962 18.9831 31.6736 19.7324 30.4288 21.0738L19.4966 32.8554C18.8161 33.5875 18.8375 34.7557 19.5452 35.4608C20.253 36.1647 21.3793 36.1426 22.0598 35.4092L32.9919 23.6277C33.0666 23.5478 33.1449 23.4716 33.2267 23.4004Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </footer>

      {/* Desktop Footer */}
      <div className={`w-full z-50 bg-black`}>
        <footer
          className="hidden lg:block w-full lg:max-w-[90rem] mx-auto px-2 sm:px-6 md:px-[3.75rem] max-w-[100vw] bg-black text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            width: "100%",
            maxWidth: "90rem",
            height: "auto",
            minHeight: "50.375rem",
            flexShrink: 0,
          }}
        >
          {/* CONTACT US Text */}
          <div style={{ paddingTop: "clamp(3rem, 6.19rem, 6.19rem)" }}>
            <h1 className="text-white text-center lg:text-left text-xl md:text-2xl lg:text-3xl">
              CONTACT US
            </h1>
          </div>

          {/* Main Content Section */}
          <div
            className="flex flex-col items-center lg:items-start lg:flex-row justify-between gap-8 lg:gap-0"
            style={{ marginTop: "clamp(1rem, 2.06rem, 2.06rem)" }}
          >
            {/* Left Column */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Let's Discuss Text */}
              <h2
                className="text-white text-center lg:text-left"
                style={{
                  width: "100%",
                  maxWidth: "19.4375rem",
                  fontSize: "clamp(1.5rem, 2.01113rem, 2.01113rem)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Let's Discuss Your Vision. With US
              </h2>

              {/* Schedule Call Button */}
              <button
                className="flex justify-center items-center bg-black border border-green-500 rounded-full hover:cursor-pointer group w-full md:w-auto"
                style={{
                  marginTop: "1rem",
                  width: "16.375rem",
                  height: "2.75rem",
                  padding: "0.12925rem",
                  gap: "0.12925rem",
                  flexShrink: 0,
                  borderRadius: "3.0625rem",
                  borderColor: "#00FF26",
                }}
              >
                <span
                  className="text-white text-sm lg:text-base"
                  style={{
                    fontSize: "clamp(0.9rem, 1.15281rem, 1.15281rem)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  Let's schedule a call
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.441rem"
                  height="1.441rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                  className="group-hover:rotate-[42.597deg] transition-transform duration-300 ease-in-out"
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
              <div
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0"
                style={{ marginTop: "clamp(3rem, 7.5rem, 7.5rem)" }}
              >
                <span
                  className="text-white"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "clamp(1.2rem, 1.86994rem, 1.86994rem)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  hello@studiosquanta.com
                </span>
                <button
                  style={{
                    marginLeft: "clamp(0rem, 1.69rem, 1.69rem)",
                    width: "clamp(3rem, 4.05156rem, 4.05156rem)",
                    height: "clamp(1.5rem, 2.10369rem, 2.10369rem)",
                    flexShrink: 0,
                  }}
                  className="hover:cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="65"
                    height="34"
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
            <div className="w-auto text-center lg:text-left">
              <div className="grid grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-4 lg:gap-y-6">
                <div className="flex flex-col space-y-4 lg:space-y-6">
                  <Link
                    to="/know-more"
                    className="text-white text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    className="text-white text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Services
                  </Link>
                  <Link
                    to="/client"
                    className="text-white text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Client
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 lg:space-y-6">
                  <Link
                    to="/work"
                    className="text-white text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Work
                  </Link>
                  <Link
                    to="/collaboration"
                    className="text-white text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Contact
                  </Link>
                  <Link
                    to="/careers"
                    className="text-white text-lg lg:text-[1.5rem] font-medium leading-normal hover:opacity-75 transition-opacity"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Careers
                  </Link>
                </div>
              </div>
              <div
                className="flex justify-center mt-8 lg:mt-0"
                style={{ marginTop: "clamp(2rem, 5.59rem, 5.59rem)" }}
              >
                <div className="w-[12rem] md:w-[15rem] lg:w-[17.75rem] h-[2.5rem] lg:h-[3rem] border border-white rounded-[2rem] lg:rounded-[3.125rem] bg-black flex justify-center items-center gap-[2rem] lg:gap-[3.125rem] flex-shrink-0">
                  <a
                    href="#"
                    aria-label="Our Google page"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img
                      src="/All Images Landing page Altecht/Google.png"
                      alt="Google"
                      className="w-[1.5rem] lg:w-[2.375rem] h-[1.5rem] lg:h-[2.375rem]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/altecht_/"
                    aria-label="Our Instagram profile"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img
                      src="/All Images Landing page Altecht/Instagram.png"
                      alt="Instagram"
                      className="w-[1.5rem] lg:w-[2.375rem] h-[1.5rem] lg:h-[2.375rem]"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/altecht/"
                    aria-label="Our LinkedIn profile"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <img
                      src="/All Images Landing page Altecht/linkedin_svgrepo.com.svg"
                      alt="LinkedIn"
                      className="w-[1.5rem] lg:w-[2.375rem] h-[1.5rem] lg:h-[2.375rem]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{ marginTop: "clamp(8rem, 16.67vw, 15rem)" }}>
            {/* Dotted Border */}
            <div
              style={{
                height: "0.125rem", // Increased height
                borderTop: "2px dashed #FFF", // Increased border width
                width: "100%",
                margin: "2rem 0", // Added vertical margin for more space
              }}
            ></div>

            {/* Bottom Content */}
            <div className="relative" style={{ marginTop: "2rem" }}>
              {/* Center - Arrow Up Button - Absolutely Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <button
                  aria-label="Scroll to top"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="flex flex-col items-center justify-center bg-black border-2 border-white rounded-full hover:cursor-pointer"
                  style={{
                    width: "clamp(2.5rem, 3.07825rem, 3.07825rem)",
                    padding: "clamp(0.4rem, 0.625rem, 0.625rem)",
                    gap: "0.625rem",
                    borderRadius: "3.375rem",
                    alignItems: "flex-start",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    style={{
                      width: "clamp(1.2rem, 1.76456rem, 1.76456rem)",
                      height: "clamp(1.2rem, 1.82825rem, 1.82825rem)",
                      fill: "#FFF",
                      stroke: "#00FF26",
                    }}
                  >
                    <mask id="path-1-inside-1_394_648" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7906 4.08267C12.8715 3.99919 13.0051 4.05972 13.0051 4.17598L12.9965 26.6057C12.9965 27.503 13.7248 28.2324 14.6211 28.2324C15.5185 28.2324 16.2478 27.5041 16.2478 26.6078L16.2573 4.34162C16.2574 4.07363 16.5509 3.92546 16.7334 4.12169C20.5288 8.22594 26.4342 14.6126 26.4342 14.6126C27.0433 15.2716 28.0718 15.3117 28.7308 14.7026C29.3897 14.0935 29.4298 13.0639 28.8207 12.405C28.8207 12.405 22.9163 6.01938 19.1209 1.91404C18.0057 0.708883 16.444 0.0163517 14.8021 9.53674e-05C13.1602 -0.0150776 11.5854 0.646025 10.4475 1.82951L0.453997 12.224C-0.168089 12.8699 -0.148582 13.9006 0.498432 14.5227C1.14545 15.1437 2.17503 15.1242 2.79712 14.4772L12.7906 4.08267Z"
                      />
                    </mask>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7906 4.08267C12.8715 3.99919 13.0051 4.05972 13.0051 4.17598L12.9965 26.6057C12.9965 27.503 13.7248 28.2324 14.6211 28.2324C15.5185 28.2324 16.2478 27.5041 16.2478 26.6078L16.2573 4.34162C16.2574 4.07363 16.5509 3.92546 16.7334 4.12169C20.5288 8.22594 26.4342 14.6126 26.4342 14.6126C27.0433 15.2716 28.0718 15.3117 28.7308 14.7026C29.3897 14.0935 29.4298 13.0639 28.8207 12.405C28.8207 12.405 22.9163 6.01938 19.1209 1.91404C18.0057 0.708883 16.444 0.0163517 14.8021 9.53674e-05C13.1602 -0.0150776 11.5854 0.646025 10.4475 1.82951L0.453997 12.224C-0.168089 12.8699 -0.148582 13.9006 0.498432 14.5227C1.14545 15.1437 2.17503 15.1242 2.79712 14.4772L12.7906 4.08267Z"
                      fill="white"
                    />
                    <path
                      d="M12.9965 26.6057L6.99652 26.6034V26.6057H12.9965ZM16.2478 26.6078L10.2478 26.6053V26.6078H16.2478ZM26.4342 14.6126L30.8403 10.5399L30.8396 10.5392L26.4342 14.6126ZM28.8207 12.405L33.2267 8.33229L33.2261 8.33157L28.8207 12.405ZM19.1209 1.91404L23.5266 -2.15902L23.5247 -2.16107L19.1209 1.91404ZM14.8021 9.53674e-05L14.8615 -5.99961L14.8575 -5.99965L14.8021 9.53674e-05ZM10.4475 1.82951L6.12248 -2.32915L6.12223 -2.32888L10.4475 1.82951ZM0.453997 12.224L4.77565 16.3861L4.77925 16.3824L0.453997 12.224ZM0.498432 14.5227L-3.66008 18.8478L-3.65631 18.8514L0.498432 14.5227ZM2.79712 14.4772L7.12226 18.6357L7.12237 18.6355L2.79712 14.4772ZM16.2573 4.34162L22.2573 4.34418L16.2573 4.34162ZM13.0051 4.17598L7.00508 4.17369L13.0051 4.17598ZM13.0051 4.17598L7.00508 4.17369L6.99652 26.6034L12.9965 26.6057L18.9965 26.608L19.0051 4.17827L13.0051 4.17598ZM12.9965 26.6057H6.99652C6.99652 30.8089 10.4033 34.2324 14.6211 34.2324V28.2324V22.2324C17.0463 22.2324 18.9965 24.1971 18.9965 26.6057H12.9965ZM14.6211 28.2324V34.2324C18.8244 34.2324 22.2478 30.8256 22.2478 26.6078H16.2478H10.2478C10.2478 24.1826 12.2126 22.2324 14.6211 22.2324V28.2324ZM16.2478 26.6078L22.2478 26.6104L22.2573 4.34418L16.2573 4.34162L10.2573 4.33906L10.2478 26.6053L16.2478 26.6078ZM16.7334 4.12169L12.3282 8.19533C14.2258 10.2474 16.651 12.87 18.6018 14.9797C19.5772 16.0346 20.4339 16.9612 21.0469 17.624C21.3533 17.9555 21.5988 18.221 21.7677 18.4036C21.8522 18.495 21.9175 18.5656 21.9616 18.6133C21.9837 18.6372 22.0005 18.6554 22.0118 18.6676C22.0175 18.6737 22.0217 18.6783 22.0246 18.6814C22.026 18.683 22.0271 18.6841 22.0278 18.6849C22.0282 18.6853 22.0284 18.6856 22.0286 18.6858C22.0287 18.6859 22.0288 18.6859 22.0288 18.686C22.0289 18.686 22.0289 18.6861 26.4342 14.6126C30.8396 10.5392 30.8396 10.5392 30.8395 10.5391C30.8395 10.5391 30.8394 10.539 30.8393 10.5389C30.8391 10.5387 30.8389 10.5384 30.8385 10.538C30.8378 10.5372 30.8367 10.5361 30.8353 10.5345C30.8324 10.5315 30.8282 10.5268 30.8225 10.5207C30.8112 10.5085 30.7944 10.4903 30.7723 10.4665C30.7282 10.4187 30.6629 10.3481 30.5784 10.2567C30.4095 10.0741 30.164 9.80857 29.8575 9.47712C29.2446 8.81423 28.3878 7.88763 27.4124 6.83277C25.4616 4.72305 23.0363 2.10026 21.1385 0.048048L16.7334 4.12169ZM26.4342 14.6126L22.0282 18.6853C24.8881 21.7793 29.7128 21.9654 32.8034 19.1086L28.7308 14.7026L24.6581 10.2965C26.4308 8.65789 29.1985 8.7638 30.8403 10.5399L26.4342 14.6126ZM28.7308 14.7026L32.8034 19.1086C35.8977 16.2485 36.0834 11.4227 33.2267 8.33229L28.8207 12.405L24.4147 16.4777C22.7762 14.7051 22.8817 11.9385 24.6581 10.2965L28.7308 14.7026ZM28.8207 12.405C33.2261 8.33157 33.2261 8.33155 33.226 8.3315C33.226 8.33145 33.2259 8.33138 33.2258 8.33128C33.2256 8.33109 33.2254 8.3308 33.225 8.33041C33.2243 8.32963 33.2232 8.32847 33.2218 8.32693C33.2189 8.32385 33.2147 8.31923 33.209 8.31313C33.1978 8.30093 33.1809 8.28275 33.1589 8.25886C33.1147 8.21109 33.0494 8.1405 32.965 8.04919C32.7961 7.86657 32.5507 7.6011 32.2443 7.26971C31.6314 6.60693 30.7748 5.68045 29.7995 4.62569C27.849 2.51614 25.4242 -0.106489 23.5266 -2.15902L19.1209 1.91404L14.7152 5.9871C16.613 8.03991 19.0381 10.6627 20.9886 12.7723C21.9639 13.8271 22.8206 14.7536 23.4334 15.4165C23.7399 15.7479 23.9853 16.0133 24.1542 16.196C24.2386 16.2873 24.3039 16.3579 24.3481 16.4057C24.3702 16.4295 24.387 16.4477 24.3983 16.4599C24.4039 16.466 24.4082 16.4707 24.411 16.4737C24.4125 16.4753 24.4135 16.4764 24.4143 16.4772C24.4146 16.4776 24.4149 16.4779 24.4151 16.4781C24.4151 16.4782 24.4152 16.4783 24.4153 16.4783C24.4153 16.4784 24.4153 16.4784 28.8207 12.405ZM19.1209 1.91404L23.5247 -2.16107C21.2891 -4.57705 18.1564 -5.96699 14.8615 -5.99961L14.8021 9.53674e-05L14.7427 5.9998C14.7317 5.99969 14.7224 5.99481 14.7171 5.98915L19.1209 1.91404ZM14.8021 9.53674e-05L14.8575 -5.99965C11.5663 -6.03006 8.40638 -4.7044 6.12248 -2.32915L10.4475 1.82951L14.7725 5.98816C14.7645 5.99645 14.7541 5.99991 14.7466 5.99984L14.8021 9.53674e-05ZM10.4475 1.82951L6.12223 -2.32888L-3.87125 8.0656L0.453997 12.224L4.77925 16.3824L14.7727 5.9879L10.4475 1.82951ZM0.453997 12.224L-3.86766 8.06186C-6.78965 11.0958 -6.69735 15.9276 -3.66008 18.8478L0.498432 14.5227L4.65694 10.1975C6.40018 11.8736 6.45347 14.644 4.77565 16.3861L0.453997 12.224ZM0.498432 14.5227L-3.65631 18.8514C-0.624455 21.7614 4.20068 21.6743 7.12226 18.6357L2.79712 14.4772L-1.52802 10.3186C0.149381 8.57403 2.91535 8.52595 4.65317 10.1939L0.498432 14.5227ZM2.79712 14.4772L7.12237 18.6355L17.1159 8.24106L12.7906 4.08267L8.46535 -0.0757179L-1.52813 10.3188L2.79712 14.4772ZM16.2573 4.34162L22.2573 4.34418C22.2564 6.49052 21.0295 8.50697 19.0163 9.4701C16.841 10.5107 14.107 10.1079 12.3399 8.20793L16.7334 4.12169L21.1269 0.03545C19.1772 -2.06076 16.2053 -2.48763 13.8376 -1.35495C11.632 -0.299799 10.2584 1.92473 10.2573 4.33906L16.2573 4.34162ZM13.0051 4.17598L19.0051 4.17827C19.0069 -0.663418 12.7737 -4.52093 8.4822 -0.0931683L12.7906 4.08267L17.099 8.25851C15.2802 10.1351 12.6081 10.4728 10.5027 9.54233C8.45944 8.63927 7.00416 6.58554 7.00508 4.17369L13.0051 4.17598Z"
                      fill="#00FF26"
                      mask="url(#path-1-inside-1_394_648)"
                    />
                  </svg>
                </button>
              </div>

              {/* Right - Footer Links */}
              <div className="flex justify-end items-center h-[3.3rem] gap-[0.8rem] lg:gap-[1.37rem] text-white text-right">
                <a
                  href="#"
                  className="hover:opacity-75 transition-opacity text-sm lg:text-base"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:opacity-75 transition-opacity text-sm lg:text-base"
                >
                  SiteMap
                </a>
                <span className="text-sm lg:text-base">
                  @{new Date().getFullYear()}, Altecht. All Rights Reserved.
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
        </footer>
      </div>
    </>
  );
};

export default Footer;
