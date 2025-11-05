import { Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/rac-rgb-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary to-accent pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="RAC RGB Logo" className="h-32 w-32 md:h-40 md:w-40 animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
          Zonal Conference 2025
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary-foreground mb-8 max-w-2xl mx-auto">
          Let's Not Wait For The Change, Let's Be The Change
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-secondary-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-lg">March 15-17, 2025</span>
          </div>
          <div className="hidden sm:block text-secondary-foreground">•</div>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-lg">Conference Venue TBA</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
            View Agenda
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
