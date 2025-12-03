import { Card } from "./ui/card";
import rcblogo from "@/assets/rac-rgb-logo.png";
import aarunya from "@/assets/aarunya-logo.jpg";
import atoma from "@/assets/atoma-logo.jpg";
const HostClubs = () => {
  const clubs = [
  { name: "Rotaract Club of Royal City Bezawada", district: "District 3020", logo: rcblogo },

  ];

  return (
    <section id="host-clubs" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Host Club of PRAGATHI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proudly hosted by Rotaract Club of Royal City Bezawada
        </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {clubs.map((club, index) => (
            <Card 
              key={index} 
              className="p-8 md:p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 w-full md:w-auto md:max-w-sm border-2 hover:border-primary/50 relative overflow-hidden group bg-card/80 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-150" />
                    <div className="relative">
                      <img 
                        src={club.logo} 
                        alt={club.name} 
                        className="h-32 w-32 object-cover rounded-full border-4 border-primary/30 group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {club.name}
                </h3>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <p className="text-primary font-semibold">{club.district}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostClubs;
