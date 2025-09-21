import BrandHero from "../components/BrandText";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServiceGrid";
import Welcome from "../components/Welcome";

 const StudioSquantaVer01LandingPage = ({ className }) => {
  return (
    <>
      <HeroSection  />
      <Welcome/>
      <BrandHero/>
      <ServicesGrid/>
    </>
  );
};
export default StudioSquantaVer01LandingPage;