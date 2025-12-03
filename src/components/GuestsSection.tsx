import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Image as ImageIcon } from "lucide-react";
import hemanth from "@/assets/Hemanth.png";
import akhil from "@/assets/Akhil.png";
import pdg from "@/assets/pdg.png";

const GuestsSection = () => {
  const guests = [
    { name: "Rtn Ravuri Subbarao (Datta) Garu", title: "Chief Guest", photo: pdg, bio: "Chief Guest - Sri Datta Square" },
    { name: "Akhil", title: "Guest Speaker", photo: akhil, bio: "Motivational speaker and trainer" },
    { name: "Hemanth", title: "Special Guest", photo: hemanth, bio: "Event organizer and district representative" },
  ];

  return (
    <section id="guests" className="py-20 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Guests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are honored to host these distinguished guests at the Pragathi Zonal Meet.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guests.map((g, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-primary/50">
                <div className="flex justify-center mb-4">
                  <div className="relative h-28 w-28 rounded-full bg-background flex items-center justify-center p-1 transition-transform duration-300 shadow-lg overflow-hidden">
                    <img src={g.photo} alt={g.name} className="absolute inset-0 h-full w-full rounded-full object-cover" />
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-1">{g.name}</h4>
                <div className="text-sm text-muted-foreground mb-3">{g.title}</div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{g.bio}</p>
                <Badge variant="secondary" className="text-primary">Guest</Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
