import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import HostClubs from "@/components/HostClubs";
import LocationSection from "@/components/LocationSection";
import AgendaSection from "@/components/AgendaSection";
import FoodSection from "@/components/FoodSection";
import PhotoGallery from "@/components/PhotoGallery";
import GuestsSection from "@/components/GuestsSection";
import SponsorsSection from "@/components/SponsorsSection";
import TeamSection from "@/components/TeamSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check navigation state or hash and scroll to the target section after render
    const state: any = (location && (location as any).state) || null;
    const target = state?.scrollTo || location.hash;
    if (!target) return;

    const tryScroll = () => {
      const el = document.querySelector(target as string);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // remove navigation state so it doesn't re-trigger
        try {
          window.history.replaceState(null, document.title, window.location.pathname + window.location.search + (location.hash || ""));
        } catch (e) {
          /* ignore */
        }
      } else {
        // retry after a short delay if element not yet rendered
        setTimeout(tryScroll, 120);
      }
    };

    // schedule first attempt
    setTimeout(tryScroll, 20);
  }, [location]);

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
      <GuestsSection />
      <SponsorsSection />
      <TeamSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
