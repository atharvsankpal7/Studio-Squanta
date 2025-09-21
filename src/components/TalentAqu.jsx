import React from "react";

const TalentAcquisitionSection = () => (
  <div className="bg-black py-16">
    <div
      className="max-w-[90rem] mx-auto"
      style={{
        paddingLeft: "clamp(1rem, 2vw + 0.5rem, 2rem)",
        paddingRight: "clamp(1rem, 2vw + 0.5rem, 2rem)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Title */}
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

        {/* Right Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                title: "Sourcing",
                items: [
                  "Talent Mapping",
                  "Active Sourcing",
                  "Recruitment Automation",
                ],
              },
              {
                title: "Hiring",
                items: ["IT Staffing", "Leadership Hiring", "Contract Hiring"],
              },
              {
                title: "Strategy",
                items: [
                  "Workforce Planning",
                  "Employer Branding",
                  "Skill Gap Analysis",
                ],
              },
              {
                title: "Optimization",
                items: [
                  "Hiring Process Automation",
                  "Interview Frameworks",
                  "Recruitment Analytics",
                ],
              },
            ].map((block, idx) => (
              <div key={idx} className="flex flex-col">
                <div
                  style={{ minHeight: "clamp(3rem, 4vw + 2rem, 4.5rem)" }}
                  className="flex items-start"
                >
                  <h3
                    className="text-white font-montserrat"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                  >
                    {block.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <ul className="space-y-4">
                    {block.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-400 font-montserrat"
                        style={{
                          fontSize: "clamp(0.875rem, 1vw + 0.4rem, 1rem)",
                          fontWeight: 400,
                          lineHeight: "normal",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TalentAcquisitionSection;
