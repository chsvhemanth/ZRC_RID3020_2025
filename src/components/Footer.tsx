import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/rac-rgb-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="RAC RGB Logo" className="h-12 w-12" />
              <span className="text-xl font-bold">Zonal Conference 2025</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Let's Not Wait For The Change, Let's Be The Change
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#host-clubs" className="hover:text-primary transition-colors">Host Clubs</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
              <li><a href="#agenda" className="hover:text-primary transition-colors">Agenda</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
              <li><a href="/attendees" className="hover:text-primary transition-colors">Attendees</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm mb-4">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                conference@example.com
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; 2025 Zonal Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
