import { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/Zonalconferencelogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { REGISTRATION_URL } from "@/lib/registration";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Host Clubs", href: "#host-clubs" },
    { name: "Location", href: "#location" },
    { name: "Agenda", href: "#agenda" },
    { name: "Food", href: "#food" },
    { name: "Gallery", href: "#gallery" },
    { name: "Guests", href: "#guests" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#team" },
    { name: "Attendees", href: "/attendees" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-secondary/99 backdrop-blur-xl z-50 border-b border-yellow-500/30 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <img src={logo} alt="RAC RGB Logo" className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <span className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-all duration-300">
              ప్రగతి
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300 rounded-lg hover:bg-yellow-500/20 group font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      navigate("/", { state: { scrollTo: item.href } });
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="relative px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300 rounded-lg hover:bg-yellow-500/20 group font-medium"
                  activeClassName="text-yellow-300 bg-yellow-500/20"
                  onClick={() => {
                    if (item.href === "/") {
                      if (location.pathname === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        navigate("/");
                      }
                    }
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </NavLink>
              )
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 ml-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full px-6 border border-yellow-500/30">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Register Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 bg-secondary/95 rounded-lg mt-2 border border-yellow-500/20">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-yellow-400 hover:text-yellow-300 transition-colors py-2 px-4 rounded-lg hover:bg-yellow-500/20"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      navigate("/", { state: { scrollTo: item.href } });
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block text-yellow-400 hover:text-yellow-300 transition-colors py-2 px-4 rounded-lg hover:bg-yellow-500/20"
                  activeClassName="text-yellow-300 bg-yellow-500/20"
                  onClick={() => {
                    setIsOpen(false);
                    if (item.href === "/") {
                      if (location.pathname === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        navigate("/");
                      }
                    }
                  }}
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90 mx-4">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Register Now</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
