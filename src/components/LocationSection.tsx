import { MapPin, Navigation } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Event Location
          </h2>
          <p className="text-lg text-muted-foreground">Find us at the heart of Vijayawada</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    Sri Datta Square
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                Santhi Nagar, Gollapudi<br />
                Vijayawada, Andhra Pradesh<br />
                  India
                </p>
                  <Button 
                    className="bg-primary hover:bg-primary/90 rounded-full px-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    onClick={() => window.open("https://maps.app.goo.gl/ipyQ57KKKCPCkKDd6", "_blank")}
                  >
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
            
              <div className="space-y-4 mt-8 pt-6 border-t border-border">
                <div className="group/item">
                  <h4 className="font-semibold mb-1 group-hover/item:text-primary transition-colors">Parking</h4>
                <p className="text-sm text-muted-foreground">Free parking available on-site</p>
              </div>
                <div className="group/item">
                  <h4 className="font-semibold mb-1 group-hover/item:text-primary transition-colors">Accessibility</h4>
                <p className="text-sm text-muted-foreground">Wheelchair accessible with elevator access</p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border-2 border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30566.566134197205!2d80.60946422617799!3d16.735792496577233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef043d4331e9%3A0x90c3b3eca41dc398!2sSri%20Datta%20Square!5e0!3m2!1sen!2sin!4v1763804935583!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
