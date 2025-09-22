import BrandHero from "../components/BrandText";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServiceGrid";
import Welcome from "../components/Welcome";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoGrid from "../components/VideoGrid";

 const StudioSquantaVer01LandingPage = ({ className }) => {
  return (
    <>
      <HeroSection  />
      <Welcome/>
      <BrandHero/>
      <ServicesGrid/>
      <TestimonialsSection />
      <VideoGrid />
    </>
  );
};
export default StudioSquantaVer01LandingPage;
