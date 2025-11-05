import { MapPin, Navigation } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Location</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Conference Venue</h3>
                <p className="text-muted-foreground mb-4">
                  123 Conference Center Drive<br />
                  City, State 12345<br />
                  Country
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="space-y-4 mt-6">
              <div>
                <h4 className="font-semibold mb-2">Parking</h4>
                <p className="text-sm text-muted-foreground">Free parking available on-site</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Accessibility</h4>
                <p className="text-sm text-muted-foreground">Wheelchair accessible with elevator access</p>
              </div>
            </div>
          </Card>
          
          <div className="bg-muted-foreground/10 rounded-lg flex items-center justify-center min-h-[400px]">
            <p className="text-muted-foreground">Map will be embedded here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
