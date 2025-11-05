import { Card } from "./ui/card";
import logo from "@/assets/rac-rgb-logo.png";

const TeamSection = () => {
  const team = [
    { name: "Conference Chairman", role: "Chairman", club: "Host Club 1" },
    { name: "Zonal President", role: "President", club: "Zone XYZ" },
    { name: "Conference Treasurer", role: "Treasurer", club: "Host Club 2" },
    { name: "Event Coordinator", role: "Coordinator", club: "Host Club 3" },
    { name: "Registration Head", role: "Registration", club: "Host Club 1" },
    { name: "Logistics Head", role: "Logistics", club: "Host Club 2" },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Organizing Team</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Meet the dedicated team making this conference possible
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img 
                  src={logo} 
                  alt={member.name} 
                  className="h-24 w-24 rounded-full border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-semibold mb-1">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.club}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
