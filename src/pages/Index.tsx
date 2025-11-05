import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import HostClubs from "@/components/HostClubs";
import LocationSection from "@/components/LocationSection";
import AgendaSection from "@/components/AgendaSection";
import FoodSection from "@/components/FoodSection";
import PhotoGallery from "@/components/PhotoGallery";
import SponsorsSection from "@/components/SponsorsSection";
import TeamSection from "@/components/TeamSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CountdownTimer />
      <HostClubs />
      <LocationSection />
      <AgendaSection />
      <FoodSection />
      <div id="gallery">
        <PhotoGallery />
      </div>
      <SponsorsSection />
      <TeamSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
