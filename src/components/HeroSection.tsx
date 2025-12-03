import { Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/Zonalconferencelogo.png";
import { REGISTRATION_URL } from "@/lib/registration";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/98 to-accent/95 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo with enhanced animation */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-ping" style={{ animationDuration: '3s' }} />
              <img
                src={logo}
                alt="RAC RCB Logo"
              className="relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 max-h-[40vh] max-w-[90%] drop-shadow-2xl animate-float"
              />
          </div>
        </div>
        
        {/* Main Heading with better typography */}
        <div className="mb-6 space-y-2">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-primary-foreground mb-2 leading-tight">
            <span className="block bg-gradient-to-r from-primary-foreground via-primary-foreground/95 to-primary-foreground/90 bg-clip-text text-transparent">
              ప్రగతి Zonal Meet 2025
            </span>
        </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-primary/50" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/90 tracking-wide">
              RID 3020 Zone 3
            </h2>
            <div className="h-px w-16 bg-primary/50" />
          </div>
        </div>
        
        {/* Tagline with icon */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 font-semibold max-w-4xl mx-auto leading-relaxed">
            Come, Learn and Enjoy the Fellowship with Rotaractors of Zone 3 RID 3020
        </p>
          <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Event Details with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <div className="flex items-center gap-3 px-8 py-4 bg-primary/15 backdrop-blur-md rounded-full border-2 border-yellow-500/30 hover:border-yellow-500/50 hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl group">
            <div className="p-2.5 bg-yellow-500/20 rounded-full group-hover:bg-yellow-500/30 transition-colors">
              <Calendar className="h-6 w-6 text-yellow-400" />
            </div>
            <span className="text-lg md:text-xl font-bold text-primary-foreground">DECEMBER 14th 2025</span>
          </div>
          <div className="hidden sm:block w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="flex items-center gap-3 px-8 py-4 bg-primary/15 backdrop-blur-md rounded-full border-2 border-yellow-500/30 hover:border-yellow-500/50 hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl group">
            <div className="p-2.5 bg-yellow-500/20 rounded-full group-hover:bg-yellow-500/30 transition-colors">
              <MapPin className="h-6 w-6 text-yellow-400" />
            </div>
            <span className="text-lg md:text-xl font-bold text-primary-foreground">Sri Datta Square, Gollapudi</span>
          </div>
        </div>
        
        {/* CTA Buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button asChild>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold rounded-full border-2 border-yellow-400/50 bg-yellow-400/90 text-primary-foreground hover:opacity-95 shadow-lg"
            >
              Register for Event
            </a>
          </Button>
          <Button asChild>
            <a
              href="#agenda"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#agenda');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold rounded-full border-2 border-yellow-400/50 text-primary-foreground hover:bg-yellow-500/20 hover:border-yellow-400 backdrop-blur-sm"
            >
              View Agenda
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
