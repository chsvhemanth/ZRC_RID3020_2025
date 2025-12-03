import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Award, Medal, Trophy, Image as ImageIcon } from "lucide-react";
import logo from "@/assets/rac-rgb-logo.png";
import atomaLogo from "@/assets/sarvani.png";
import aarunyaLogo from "@/assets/Akhil.png";
import hemanth from "@/assets/Hemanth.png";
import pdg from "@/assets/pdg.png";

const SponsorsSection = () => {
  const sponsorTiers = [
    
    {
      tier: "Venue",
      icon: Award,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      sponsors: [
        { name: "Rtn Ravuri Subbarao (Datta) Garu", description: "Sri Datta Square", logo:pdg },
      ],
    },
    {
      tier: "Silver",
      icon: Medal,
      color: "text-gray-400",
      bgColor: "bg-gray-50 dark:bg-gray-900/50",
      sponsors: [
        { name: "Company Name F", description: "Supporting community growth", logo: atomaLogo },
        { name: "Company Name G", description: "Local business champion", logo: aarunyaLogo },
        { name: "Company Name H", description: "Regional development partner", logo:hemanth },
        { name: "Company Name I", description: "Innovation supporter", logo:hemanth },
      ],
    },
    {
      tier: "Bronze",
      icon: Star,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      sponsors: [
        { name: "Company Name J", description: "Event supporter", logo:hemanth },
        { name: "Company Name K", description: "Community partner", logo:hemanth },
        { name: "Company Name L", description: "Youth development advocate", logo:hemanth },
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are grateful to our sponsors for their generous support in making the Pragathi Zonal Meet possible
        </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <tier.icon className={`h-8 w-8 ${tier.color}`} />
                <h3 className="text-2xl md:text-3xl font-bold">{tier.tier} Sponsors</h3>
                <tier.icon className={`h-8 w-8 ${tier.color}`} />
              </div>

              <div
                className={`grid grid-cols-1 ${
                  tier.sponsors.length === 1
                    ? "md:grid-cols-1 max-w-2xl mx-auto"
                    : tier.sponsors.length === 2
                    ? "md:grid-cols-2 max-w-4xl mx-auto"
                    : tier.sponsors.length === 3
                    ? "md:grid-cols-3"
                    : "md:grid-cols-2 lg:grid-cols-4"
                } gap-6`}
              >
                {tier.sponsors.map((sponsor, index) => (
                  <Card
                    key={index}
                    className={`${tier.bgColor} p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4 relative">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                          <div className="relative h-28 w-28 rounded-full bg-background flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden">
                        <img src={(sponsor as any).logo ?? logo} alt={sponsor.name} className="absolute inset-0 h-full w-full rounded-full object-cover" />
                        {/* If sponsor has no custom logo yet, show a subtle image icon overlay as a placeholder indicator */}
                        {!((sponsor as any).logo) && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-background/30">
                            <ImageIcon className="h-8 w-8 text-muted-foreground/60" />
                          </div>
                        )}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                        <img src={logo} alt="sponsor logo" className="h-6 w-6 object-contain opacity-90" />
                        <span>{sponsor.name}</span>
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sponsor.description}</p>
                      <Badge variant="secondary" className={`${tier.color} group-hover:scale-110 transition-transform duration-300`}>
                        {tier.tier}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
};

export default SponsorsSection;
