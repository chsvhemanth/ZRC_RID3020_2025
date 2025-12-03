import { ExternalLink, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { REGISTRATION_URL } from "@/lib/registration";
import { Card, CardContent } from "./ui/card";

const RegistrationSection = () => {
  const pricingTiers = [
    {
      name: "Early Bird",
      price: "₹149",
      deadline: "November 24, 11:59 PM",
      featured: true,
    },
    {
      name: "Slab 1",
      price: "₹179",
      deadline: "November 28",
      featured: false,
    },
    {
      name: "Slab 2",
      price: "₹229",
      deadline: "December 5",
      featured: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-yellow-300 uppercase tracking-widest">Registration</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-foreground">
            Ready to Join Us?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
            Register now to secure your spot at the Zonal Meet 2025. 
            Early bird registrations get special benefits!
          </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-card/95 backdrop-blur-sm ${
                tier.featured 
                  ? "border-2 border-yellow-400 shadow-2xl scale-105 md:scale-110 ring-2 ring-yellow-400/30" 
                  : "border-2 border-primary/20 hover:border-primary/50"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-yellow-400 to-yellow-500 text-primary-foreground px-4 py-2 text-xs font-bold rounded-bl-xl shadow-lg">
                  ⭐ BEST VALUE
                </div>
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.featured ? 'from-yellow-500/10 to-primary/5' : 'from-primary/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <CardContent className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <p className="text-5xl md:text-6xl font-black text-primary mb-2">{tier.price}</p>
                  <p className="text-sm text-muted-foreground font-medium">Registration Fee</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 bg-muted/50 rounded-lg py-2 px-4">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">Until {tier.deadline}</span>
                </div>
                <Button asChild size="lg" className={`w-full text-lg font-semibold rounded-xl ${
                    tier.featured 
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-primary-foreground shadow-lg" 
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}>
                  <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Register Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
          
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 text-primary-foreground/95 bg-primary-foreground/10 backdrop-blur-sm rounded-xl py-4 px-6 border border-primary-foreground/20">
            <CheckCircle2 className="h-6 w-6 text-yellow-400 flex-shrink-0" />
            <p className="text-base font-medium">
            Registration includes access to all sessions, meals, and Pragathi Zonal Meet materials
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
