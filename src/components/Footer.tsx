import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/Zonalconferencelogo.png";

// Replace this with the URL you want the "Developed by" button to open.
const DEVELOPED_BY_LINK = "https://chsvhemanth-portfolio.vercel.app/";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary via-secondary/95 to-secondary text-secondary-foreground py-12 md:py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <img src={logo} alt="RAC RCB Logo" className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text">ప్రగతి</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Come, Learn and Enjoy the Fellowship with Rotaractors of Zone 3 RID 3020
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Host Clubs", href: "#host-clubs" },
                { name: "Location", href: "#location" },
                { name: "Agenda", href: "#agenda" },
                { name: "Gallery", href: "#gallery" },
                { name: "Guests", href: "#guests" },
                { name: "Sponsors", href: "#sponsors" },
                { name: "Attendees", href: "/attendees" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:translate-x-1 group"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-lg">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm mb-6">
              <a 
                href="mailto:zrrzone3.2526@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-all duration-300 group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="break-all">zrrzone3.2526@gmail.com</span>
              </a>
              <a 
                href="tel:+919440150658"
                className="flex items-center gap-3 hover:text-primary transition-all duration-300 group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
                <span>+91 9440150658</span>
              </a>
            </div>
            <a 
              href="https://www.instagram.com/rid_3020?igsh=MWNkb3dzYWNwNmRwdg==" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-all duration-300 group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-semibold">@rid_3020</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-sm text-secondary-foreground/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            &copy; 2025 - ప్రగతి Zonal Meet 2025 RID 3020 Zone 3. All rights reserved.
          </p>
          <a
            href={DEVELOPED_BY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Meet the Developer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
