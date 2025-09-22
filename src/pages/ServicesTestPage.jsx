import React from "react";
import MobileServicesSection from "../components/MobileServicesSection";
import Container from "../components/ui/Container";

/**
 * Test page for the MobileServicesSection component
 * This can be used to verify the component works correctly
 */
export const ServicesTestPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <MobileServicesSection />
    </div>
  );
};

export default ServicesTestPage;
