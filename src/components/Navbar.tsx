import { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/rac-rgb-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Host Clubs", href: "#host-clubs" },
    { name: "Location", href: "#location" },
    { name: "Agenda", href: "#agenda" },
    { name: "Food", href: "#food" },
    { name: "Gallery", href: "#gallery" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#team" },
    { name: "Attendees", href: "/attendees" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RAC RGB Logo" className="h-12 w-12" />
            <span className="text-xl font-bold text-primary-foreground">Zonal Conference</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-secondary-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary"
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-secondary-foreground hover:text-primary transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block text-secondary-foreground hover:text-primary transition-colors py-2"
                  activeClassName="text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90">Register Now</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
