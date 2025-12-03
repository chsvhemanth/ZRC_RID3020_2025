import { Card } from "./ui/card";
import logo from "@/assets/rac-rgb-logo.png";
import hemanth from "@/assets/Hemanth.png";
import kalyan from "@/assets/kalyan.png";
import Akhil from "@/assets/Akhil.png";
import mohan from "@/assets/mohan.jpeg";
import sarvani from "@/assets/sarvani.png";

const TeamSection = () => {
  const team = [
    { 
      name: "PHF IPP Rtr. Prabhu Kalyan Ratnala", 
      role: "Zonal Rotaract Representative", 
      club: "RID 3020 , Zone 3",
      photo: kalyan
    },
    { 
      name: "Rtr.Hemanth Challapalli", 
      role: "Meet Chairman", 
      club: "Rotaract Club of Royal City Bezawada",
      photo: hemanth
    },
    { 
      name: "Rtr Lakshmi Sarvani", 
      role: "Meet President", 
      club: "Rotaract Club of Royal City Bezawada",
      photo: sarvani
    },
    { 
      name: "Rtr Mohan Krishna Naik", 
      role: "Meet Secretary ", 
      club: "Rotaract Club of Royal City Bezawada",
      photo: mohan
    },
    { 
      name: "Rtr . Akhil", 
      role: "Meet Treasurer", 
      club: "Rotaract club of  Royal City Bezawada",
      photo: Akhil
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Organizing Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the dedicated team making the Pragathi Zonal Meet possible
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 relative overflow-hidden group bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex justify-center mb-4 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-150" />
                    <div className="relative">
                <img 
                  src={member.photo}
                  alt={member.name} 
                        className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-primary/30 object-cover group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-lg"
                />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                  <p className="text-primary font-semibold text-sm md:text-base">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.club}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
