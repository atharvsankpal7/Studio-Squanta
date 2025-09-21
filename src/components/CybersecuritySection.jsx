import React from "react";

const CybersecuritySection = () => (
  <div className="bg-black py-16">
    <div
      className="max-w-[90rem] mx-auto"
      style={{
        paddingLeft: "clamp(1rem, 2vw + 0.5rem, 2rem)",
        paddingRight: "clamp(1rem, 2vw + 0.5rem, 2rem)",
      }}
    >
      {/* Main container - Capabilities on left, Grid on right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Left side - Capabilities title */}
        <div className="lg:col-span-1">
          <h2
            className="text-white font-montserrat"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: "1.4rem",
                  }}
          >
            Capabilities -
          </h2>
        </div>

        {/* Right side - 2x3 Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Row 1 */}
            <div className="flex flex-col">
              <div
                style={{ minHeight: "clamp(3rem, 4vw + 2rem, 4.5rem)" }}
                className="flex items-start"
              >
                <h3
                  className="text-white font-montserrat"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: "1.4rem",
                  }}
                >
                  Threat Detection & Response
                </h3>
              </div>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Incident Response
                  </li>
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Continuous Monitoring
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                style={{ minHeight: "clamp(3rem, 4vw + 2rem, 4.5rem)" }}
                className="flex items-start"
              >
                <h3
                  className="text-white font-montserrat"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: "1.4rem",
                  }}
                >
                  Compliance & Audit
                </h3>
              </div>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Compliance Audits
                  </li>
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Security Awareness Training
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                style={{ minHeight: "clamp(3rem, 4vw + 2rem, 4.5rem)" }}
                className="flex items-start"
              >
                <h3
                  className="text-white font-montserrat"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: "1.4rem",
                  }}
                >
                  Network Security
                </h3>
              </div>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Endpoint Security
                  </li>
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Network Protection
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col">
              <div
                style={{ minHeight: "clamp(3rem, 4vw + 2rem, 4.5rem)" }}
                className="flex items-start"
              >
                <h3
                  className="text-white font-montserrat"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: "1.4rem",
                  }}
                >
                  Cloud Security
                </h3>
              </div>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Cloud Infrastructure Security
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                style={{ minHeight: "clamp(3rem, 4vw + 2rem, 4.5rem)" }}
                className="flex items-start"
              >
                <h3
                  className="text-white font-montserrat"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: "1.4rem",
                  }}
                >
                  Security Audits & Penetration Testing
                </h3>
              </div>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Vulnerability Patching
                  </li>
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Security Audits
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                style={{ minHeight: "clamp(3rem, 4vw + 2rem, 4.5rem)" }}
                className="flex items-start"
              >
                <h3
                  className="text-white font-montserrat"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: "1.4rem",
                  }}
                >
                  Tech Stack
                </h3>
              </div>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Splunk
                  </li>
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    AWS Security Hub
                  </li>
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Azure Security Center
                  </li>
                  <li
                    className="text-gray-400 font-montserrat"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Nessus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CybersecuritySection;
