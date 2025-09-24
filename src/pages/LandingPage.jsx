import BrandHero from "../components/BrandText";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServiceGrid";
import Welcome from "../components/Welcome";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoGrid from "../components/VideoGrid";
import FeaturedWorks from "../components/WorkSection";
import Marquee from "../components/Marquee";
import CollaborationSectionHome from "../components/CollaborationSectionHome";

const StudioSquantaVer01LandingPage = ({ className }) => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <BrandHero />
      <Marquee />
      <ServicesGrid />
      <TestimonialsSection />
      <VideoGrid />
      <FeaturedWorks />
      <CollaborationSectionHome />
    </>
  );
};
export default StudioSquantaVer01LandingPage;
