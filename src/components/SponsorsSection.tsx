import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Award, Medal, Trophy } from "lucide-react";
import logo from "@/assets/rac-rgb-logo.png";

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Platinum",
      icon: Trophy,
      color: "text-slate-400",
      bgColor: "bg-slate-50 dark:bg-slate-900/50",
      sponsors: [
        { name: "Company Name A", description: "Leading technology solutions provider" },
        { name: "Company Name B", description: "Innovation in digital services" },
      ],
    },
    {
      tier: "Gold",
      icon: Award,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      sponsors: [
        { name: "Company Name C", description: "Business excellence partner" },
        { name: "Company Name D", description: "Corporate solutions expert" },
        { name: "Company Name E", description: "Professional services leader" },
      ],
    },
    {
      tier: "Silver",
      icon: Medal,
      color: "text-gray-400",
      bgColor: "bg-gray-50 dark:bg-gray-900/50",
      sponsors: [
        { name: "Company Name F", description: "Supporting community growth" },
        { name: "Company Name G", description: "Local business champion" },
        { name: "Company Name H", description: "Regional development partner" },
        { name: "Company Name I", description: "Innovation supporter" },
      ],
    },
    {
      tier: "Bronze",
      icon: Star,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      sponsors: [
        { name: "Company Name J", description: "Event supporter" },
        { name: "Company Name K", description: "Community partner" },
        { name: "Company Name L", description: "Youth development advocate" },
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Sponsors</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We are grateful to our sponsors for their generous support in making this conference possible
        </p>

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
                    className={`${tier.bgColor} p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border-2`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="h-20 w-20 rounded-full bg-background flex items-center justify-center p-2">
                        <img src={logo} alt={sponsor.name} className="h-full w-full object-contain" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{sponsor.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{sponsor.description}</p>
                    <Badge variant="secondary" className={tier.color}>
                      {tier.tier}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Card className="mt-16 p-8 max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10">
          <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
          <p className="text-muted-foreground mb-6">
            Join us in making a difference! Partner with us and gain visibility among Rotaract leaders and members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sponsors@example.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Contact Us for Sponsorship
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SponsorsSection;
