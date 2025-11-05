import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const RegistrationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Register now to secure your spot at the Zonal Conference 2025. 
            Early bird registrations get special benefits!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">₹500</p>
              <p className="text-sm text-muted-foreground">Early Bird</p>
              <p className="text-xs text-muted-foreground">Until Feb 15</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">₹700</p>
              <p className="text-sm text-muted-foreground">Regular</p>
              <p className="text-xs text-muted-foreground">Until Mar 10</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">₹900</p>
              <p className="text-sm text-muted-foreground">On-Spot</p>
              <p className="text-xs text-muted-foreground">At Venue</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
            <ExternalLink className="mr-2 h-5 w-5" />
            Register Now
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Registration includes access to all sessions, meals, and conference materials
          </p>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationSection;
