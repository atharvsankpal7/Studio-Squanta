import React from "react";

const SmartKisan = () => {
  const farmingPills = ["App design", "Drone Integration", "Precision Farming UI"];
  const jobManagementPills = ["App design", "Assign & Schedule Jobs", "Client Booking Flow"];

  const renderPill = (text, index) => (
    <button
      key={index}
      className="text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center flex-shrink-0 mb-4"
      style={{
        height: "2.25rem",
        fontSize: "1rem",
        fontFamily: "Montserrat",
        fontWeight: 600,
        padding: "0.5rem 2.31rem",
      }}
    >
      {text}
    </button>
  );

  return (
    <div className="bg-black px-4 lg:px-0 pb-8 sm:pb-12 lg:pb-[23rem]">
      {/* Top Image */}
      <img
        src="All Images Landing page Altecht/Work 2.png"
        alt="Smart Kisan Dashboard"
        className="w-full object-cover rounded-xl"
        style={{ paddingTop: "3.94rem", paddingBottom: "2.94rem" }}
      />

      {/* Empowering India's Farmers Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start text-left space-y-6 lg:space-y-0 lg:space-x-12">
        <div
          className="text-white font-semibold leading-normal text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem]"    
          style={{
            width: "100%",
            maxWidth: "39.3125rem",
            fontFamily: "Montserrat",
          }}
        >
          Empowering India's Farmers with Smart Technology
        </div>
        <div className="w-full max-w-[34.6875rem]">
          <p
            className="text-white text-[1rem] sm:text-[1.125rem] lg:text-[1.24663rem] font-normal pb-6 pt-4"
            style={{
              fontFamily: "Montserrat",
              lineHeight: "normal",
            }}
          >
            Smart Kisan is a next-gen agri-tech platform that helps farmers make
            data-driven decisions using AI-powered insights, drone monitoring,
            and real-time crop health tracking all in one seamless app.
          </p>
          <div className="flex flex-wrap gap-3 lg:space-x-6 pb-6">
            {farmingPills.map((pill, index) => renderPill(pill, index))}
          </div>
        </div>
      </div>

      <div className="mb-[3rem]">
        <img
          src="All Images Landing page Altecht/Work 1.png"
          alt="Smart Kisan Dashboard"
          className="w-full object-cover rounded-xl"
        />
      </div>

      {/* Simplifying Job Assignments Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start text-left space-y-6 lg:space-y-0 lg:space-x-12">
        <h2
          className="text-white font-semibold leading-normal text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem]"
          style={{
            width: "100%",
            maxWidth: "39.3125rem",
            fontFamily: "Montserrat",
          }}
        >
          Simplifying Job Assignments with Smart Booking
        </h2>
        <div className="w-full max-w-[34.6875rem]">
          <p
            className="text-white text-[1rem] sm:text-[1.125rem] lg:text-[1.24663rem] font-normal pb-6 pt-4"
            style={{
              fontFamily: "Montserrat",
              lineHeight: "normal",
            }}
          >
            A powerful job management app designed for service businesses. From
            assigning employees to managing client details, selecting schedules,
            and ensuring job readiness everything happens in a few taps.
          </p>
          <div className="flex flex-wrap gap-3 lg:space-x-6 mb-6">
            {jobManagementPills.map((pill, index) => renderPill(pill, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartKisan;
