import { Card } from "./ui/card";
import logo from "@/assets/rac-rgb-logo.png";

const HostClubs = () => {
  const clubs = [
    { name: "Rotaract Club 1", district: "District 3020" },
    { name: "Rotaract Club 2", district: "District 3020" },
    { name: "Rotaract Club 3", district: "District 3020" },
  ];

  return (
    <section id="host-clubs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Host Clubs</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proudly hosted by three dedicated Rotaract clubs committed to making a difference
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clubs.map((club, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img src={logo} alt={club.name} className="h-24 w-24" />
              </div>
              <h3 className="text-xl font-bold mb-2">{club.name}</h3>
              <p className="text-muted-foreground">{club.district}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostClubs;
